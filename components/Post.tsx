import React, { useState } from 'react';
import styles from './Post.module.css'; // Make sure to create this CSS module.

interface PostProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    // This will simply increment the like count for now
    setLikeCount((count) => count + 1);
  };

  // These functions don't do anything yet, they're just placeholders
  const comment = () => console.log('Comment');
  const share = () => console.log('Share');

  return (
    <div className={styles.post}>
      <p>{content}</p>
      <button onClick={toggleLike} className={styles.button}>
        Like ({likeCount})
      </button>
      <button onClick={comment} className={styles.button}>Comment</button>
      <button onClick={share} className={styles.button}>Share</button>
    </div>
  );
};

export default Post;
