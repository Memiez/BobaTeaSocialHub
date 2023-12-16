import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>([
    // Example messages
    "ไปลองชาไข่มุกร้านเปิดใหม่กัน",
    "ได้ ไปกันเย็นนี้เลย",
    // ... more messages
  ]);

  const sendMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="p-4">
        {/* Profile and Chat Header */}
        <div className="flex items-center mb-4">
          <img
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="User Avatar"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h1 className="text-xl font-semibold">BoBa Sweety</h1>
            <p className="text-gray-500">ยอดนักชิม</p>
          </div>
        </div>
        {/* Chat Messages */}
        <div className="overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatMessage key={index} text={msg} isCurrentUser={index % 2 === 0} />
          ))}
        </div>
      </div>
      {/* Chat Input */}
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
