// pages/chat/index.tsx
import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from your API
    fetch('/api/chat')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.sender}: {message.content}</p>
        ))}
      </div>
      {/* Add form to send new message here */}
    </div>
  );
};

export default ChatPage;
