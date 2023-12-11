// pages/index.tsx
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Social Media App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
              <a>Posts</a> {/* Make sure there's no href attribute here */}
            </Link>
          </li>
          <li>
            <Link href="/user/1"> {/* Assuming '1' is a valid user id */}
              <a>User Profile</a> {/* Make sure there's no href attribute here */}
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <a>Chat</a> {/* Make sure there's no href attribute here */}
            </Link>
          </li>
        </ul>
      </nav>
      {/* Additional content can be added here */}
    </div>
  );
};

export default HomePage;

