import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/icons/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">Your App</span>
        </div>
        <div className="flex items-center">
          <input
            className="rounded-full px-4 py-2 border border-gray-300 focus:ring focus:ring-blue-300 transition duration-300"
            type="search"
            placeholder="Search..."
          />
          {/* Insert icons for additional actions */}
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Messages</a>
          <a href="#" className="hover:text-gray-600">Notifications</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
