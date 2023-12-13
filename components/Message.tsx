import React from 'react';

interface MessageProps {
  sender: string;
  text: string;
  timestamp: Date; // Use a date object or a formatted string as needed
}

const Message: React.FC<MessageProps> = ({ sender, text, timestamp }) => {
  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="font-semibold">{sender}</div>
      <p className="text-gray-700">{text}</p>
      <div className="text-xs text-gray-500">
        {timestamp.toLocaleTimeString()} {/* Format timestamp as needed */}
      </div>
    </div>
  );
};

export default Message;
