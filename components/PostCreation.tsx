import React, { useState } from 'react';

const PostCreation: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className="rounded-lg shadow-lg p-6 bg-white">
      <textarea
        className="w-full border border-gray-300 rounded-lg p-4 mb-4"
        placeholder="Share something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
        Post
      </button>
    </div>
  );
};

export default PostCreation;
