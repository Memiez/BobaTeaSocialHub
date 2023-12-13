import React from 'react';

const PostItem: React.FC<{ post: any }> = ({ post }) => { // Replace 'any' with your actual Post type
  return (
    <article className="border rounded-lg p-4 bg-white shadow">
      {/* Post content */}
      <div>{post.content}</div>
      {/* Like, comment, and share buttons */}
      <div className="flex justify-between mt-2 text-gray-600">
        <button className="flex items-center gap-1">
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1">
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-1">
          <span>Share</span>
        </button>
      </div>
    </article>
  );
};

export default PostItem;
