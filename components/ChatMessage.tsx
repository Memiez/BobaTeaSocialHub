import React from 'react';

interface IMessageProps {
  message: {
    sender: string;
    content: string;
  };
}

const ChatMessage: React.FC<IMessageProps> = ({ message }) => {
  return (
    <div className="p-2 bg-white rounded-md shadow">
      <p className="font-bold">{message.sender}</p>
      <p>{message.content}</p>
    </div>
  );
};

export default ChatMessage;
