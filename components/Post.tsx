import React from 'react';

interface PostProps {
  content: string;
  // Additional props like 'likes' if needed
}

const Post: React.FC<PostProps> = ({ content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-gray-800">{content}</p>
      {/* Interactive elements like like, comment, share buttons */}
    </div>
  );
};

export default Post;