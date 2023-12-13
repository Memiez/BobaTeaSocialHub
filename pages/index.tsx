import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';
import Feed from '../components/Feed';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto grid grid-cols-12 gap-4 py-6">
        <div className="col-span-3">
          <ProfileSidebar />
        </div>
        <main className="col-span-6">
          <Feed />
        </main>
        <aside className="col-span-3">
          {/* Additional sidebar content such as trends or recommendations */}
        </aside>
      </div>
    </div>
  );
};

export default HomePage;