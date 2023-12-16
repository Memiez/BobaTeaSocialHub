// components/ChatMessage.tsx
import React from 'react';

const ChatMessage = ({ text, isCurrentUser }: { text: string; isCurrentUser: boolean }) => {
  const messageClass = isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';
  return (
    <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-2 my-2 rounded ${messageClass}`}>
      {text}
    </div>
  );
};

export default ChatMessage;
