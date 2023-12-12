import React from 'react';
import { Message } from '../interfaces/message';
import styles from './Message.module.css'; // Make sure to create this CSS module.

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={styles.message}>
      <p><strong>{message.sender}:</strong> {message.content}</p>
      <span className={styles.timestamp}>{message.timestamp.toLocaleTimeString()}</span>
    </div>
  );
};

export default MessageComponent;