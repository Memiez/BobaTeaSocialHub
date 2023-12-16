import Head from 'next/head';
import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import Feed from '../components/Feed';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-1">
          <ProfileSidebar />
        </div>
        <main className="md:col-span-2">
          <Feed />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
