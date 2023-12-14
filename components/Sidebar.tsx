
import React from 'react';
import { FaHome, FaCog, FaEnvelope } from 'react-icons/fa'; // Ensure you've installed react-icons

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800 overflow-y-auto transition-transform -translate-x-full sm:translate-x-0">
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {/* Sidebar items */}
          <li>
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-red-700">
              <FaHome className="w-5 h-5" />
              <span className="ms-3">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-red-700">
              <FaCog className="w-5 h-5" />
              <span className="ms-3">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-400 hover:text-red-700">
              <FaEnvelope className="w-5 h-5" />
              <span className="ms-3">Messages</span>
            </a>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;