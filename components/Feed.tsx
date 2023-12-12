import React from "react";
import PostItem from "./PostItem";
import styles from "./Feed.module.css"; // Correct path to your CSS module

const Feed: React.FC = () => {
  // Assume posts is an array of post data
  const posts = [];

  return (
    <div className={styles.feed}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
