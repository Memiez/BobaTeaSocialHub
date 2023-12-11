import React from 'react';
import { Post } from '../interfaces/post';

const PostDisplay: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      {/* Add more post details like user avatar, name, date, etc. */}
    </div>
  );
};

export default PostDisplay;
