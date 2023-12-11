// components/PostDisplay.tsx
import React from 'react';
import { Post } from '../interfaces/post';

const PostDisplay: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      {/* You can add more details like user avatar, name, post date, etc. */}
    </div>
  );
};

export default PostDisplay;
