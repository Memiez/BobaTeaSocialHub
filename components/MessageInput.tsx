import React, { useState } from 'react';

interface IMessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<IMessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleSendMessage}
        placeholder="Type a message..."
        className="focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3 flex-grow"
      />
      {/* Icons and Send button here */}
    </div>
  );
};

export default MessageInput;