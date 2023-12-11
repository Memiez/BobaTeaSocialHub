import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <header className="border-b pb-6">
        <h1 className="font-bold text-3xl">My Social Media App</h1>
      </header>
      <nav className="my-4">
        <ul className="flex justify-around">
          <li>
            <Link href="/posts"><a className="text-blue-600 hover:underline">Posts</a></Link>
          </li>
          <li>
            <Link href="/user/1"><a className="text-blue-600 hover:underline">User Profile</a></Link>
          </li>
          <li>
            <Link href="/chat"><a className="text-blue-600 hover:underline">Chat</a></Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="text-center my-10">
          <p>Welcome to your dashboard. Here you can view the latest posts, chat with friends, and edit your profile.</p>
        </div>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default HomePage;
