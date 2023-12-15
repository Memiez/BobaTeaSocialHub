import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://img5.pic.in.th/file/secure-sv1/DALL_E_2023-12-15_17.30.21_-_die-cut_sticker__digital_drawing__featuring_the_words__Boba_Tea__in_a_cute_and_beautiful_3D_font_style._The_sticker_has_a_solid_white_background__a_st-removebg-preview.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">Boba Tea</span>
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
