import React from 'react';
import Post from './Post'; // Assume Post is a separate component

const Feed: React.FC = () => {
  const posts = [
    { id: '1', content: 'Welcome to the social platform!', likes: 5 },
    // More posts...
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;