import React from 'react';
import styles from './PostItem.module.css'; // Make sure this matches the file name

const PostItem: React.FC = ({ post }) => {
  return (
    <article className={styles.postItem}>
      {/* Post content with like, comment, and share buttons */}
    </article>
  );
};

export default PostItem;