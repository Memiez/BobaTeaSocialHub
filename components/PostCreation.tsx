// components/PostCreation.tsx
import React, { useState } from 'react';
import { Post } from '../interfaces/post';

const PostCreation: React.FC = () => {
  const [postContent, setPostContent] = useState<string>('');

  const handleSubmit = async () => {
    const newPost: Post = {
      id: 'generated-id', // This should be generated by the database
      userId: 'user-id', // This should come from the user's session
      content: postContent,
      createdAt: new Date(),
    };

    // TODO: Send `newPost` to the backend
  };

  return (
    <div>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default PostCreation;
