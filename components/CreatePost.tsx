import React, { useState } from 'react';
import styles from './CreatePost.module.css'; // This should match the file name exactly.

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    console.log(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.input}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit" className={styles.button}>Post</button>
    </form>
  );
};

export default CreatePost;