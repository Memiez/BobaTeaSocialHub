import React, { useState } from 'react';
import MessageComponent from '../components/Message';
import { Message } from '../interfaces/message';
import styles from './Chat.module.css'; // Make sure to create this CSS module.

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend: Message = {
      id: Date.now().toString(), // Temporary unique ID
      sender: 'Username', // Replace with actual user data
      content: newMessage,
      timestamp: new Date(),
    };
    setMessages([...messages, messageToSend]);
    setNewMessage('');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <MessageComponent key={message.id} message={message} />
        ))}
      </div>
      <form onSubmit={handleSendMessage} className={styles.messageForm}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.messageInput}
          placeholder="Type a message..."
        />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
