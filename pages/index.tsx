// pages/index.tsx
import React from 'react';
import Post from '../components/Post';

const HomePage: React.FC = () => {
  // Example content, in a real app this would come from state or props.
  const postContent = 'This is an example social media post!';

  return (
    <main>
      <h1>Social Media App</h1>
      <Post content={postContent} />
      {/* Here you could map over an array of post contents */}
    </main>
  );
};

export default HomePage;
