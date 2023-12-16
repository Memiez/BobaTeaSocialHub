import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>([
    // Example messages
    "เราไปลองร้านเปิดใหม่กันไหม",
    "ได้สิ ไปกันเย็นนี้เลย",
    "โกกกก !",
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
            src="https://img2.pic.in.th/pic/DALLE-2023-12-16-15.17.12---A-cute-animated-style-sticker-design-featuring-a-bubble-tea-character.-The-bubble-tea-has-a-smiling-face-big-expressive-eyes-and-is-adorned-with-p.png" // Replace with your image path
            alt="User Avatar"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h1 className="text-xl font-semibold">น้องโบ๊ะบ๊ะ</h1>
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