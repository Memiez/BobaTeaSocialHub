// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-5">
        {/* ... Sidebar content ... */}
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* ... Main content ... */}
      </main>

      {/* Right sidebar */}
      <aside className="w-1/5 bg-white p-5">
        {/* ... Right sidebar content ... */}
      </aside>
    </div>
  );
};

export default HomePage;
