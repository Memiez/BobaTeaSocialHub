import React, { useState } from 'react';
import styles from './PostCreation.module.css';

const PostCreation: React.FC = () => {
  const [content, setContent] = useState('');

  const handlePostCreation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would add the logic to call your API endpoint
    console.log(content); // For now, we'll just log the content to the console
    setContent('');
  };

  return (
    <form onSubmit={handlePostCreation}>
      <textarea
        className={styles.textarea}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className={styles.button} type="submit">
        Post
      </button>
    </form>
  );
};

export default PostCreation;
