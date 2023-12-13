import React, { useState } from 'react';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    console.log(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        className="border rounded-md w-full p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
