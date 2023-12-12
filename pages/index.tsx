import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <ProfileSidebar />
        <CreatePost />
        <Feed />
      </main>
    </>
  );
};

export default HomePage;