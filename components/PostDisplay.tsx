import React from 'react';
import styles from './PostDisplay.module.css'; // Ensure you have this CSS file created

interface PostDisplayProps {
  post: {
    id: string;
    content: string;
    // Add more post properties here if needed
  };
}

const PostDisplay: React.FC<PostDisplayProps> = ({ post }) => {
  // Placeholder functions for like, comment, and share
  const handleLike = () => {
    console.log('Like post', post.id);
    // TODO: Implement like functionality
  };

  const handleComment = () => {
    console.log('Comment on post', post.id);
    // TODO: Implement comment functionality
  };

  const handleShare = () => {
    console.log('Share post', post.id);
    // TODO: Implement share functionality
  };

  return (
    <div className={styles.post}>
      <p>{post.content}</p>
      <div className={styles.actions}>
        <button onClick={handleLike} className={styles.button}>Like</button>
        <button onClick={handleComment} className={styles.button}>Comment</button>
        <button onClick={handleShare} className={styles.button}>Share</button>
      </div>
    </div>
  );
};

export default PostDisplay;
