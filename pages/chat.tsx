import React, { useState, useEffect, useRef } from 'react';
import MessageInput from '../components/MessageInput';

interface IMessage {
  id: number;
  sender: string;
  content: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageToSend: IMessage = {
      id: messages.length + 1,
      sender: 'User',
      content: newMessage,
    };

    setMessages([...messages, messageToSend]);
    setNewMessage('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      {/* Top bar and user info here */}
      {/* Messages container */}
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {/* ... map over messages and render them ... */}
        <div ref={messagesEndRef} />
      </div>
      {/* Message input */}
      <form onSubmit={handleSendMessage} className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        {/* ... message input field and send button ... */}
      </form>
    </div>
  );
}

export default ChatPage;