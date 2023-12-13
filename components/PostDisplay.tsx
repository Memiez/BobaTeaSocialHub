import React from 'react';

interface PostDisplayProps {
  post: {
    id: string;
    content: string;
    // Include other properties as needed
  };
}

const PostDisplay: React.FC<PostDisplayProps> = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow mb-4">
      <p>{post.content}</p>
      <div className="flex justify-between items-center mt-2 text-gray-600">
        <button className="flex items-center gap-1">
          👍 Like
        </button>
        <button className="flex items-center gap-1">
          💬 Comment
        </button>
        <button className="flex items-center gap-1">
          🔄 Share
        </button>
      </div>
    </div>
  );
};

export default PostDisplay;
