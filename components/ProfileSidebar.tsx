import React from 'react';

const ProfileSidebar: React.FC = () => {
  return (
    <aside className="bg-white p-4 rounded-lg shadow sticky top-4">
      <div className="flex items-center space-x-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Transparent-jack-russell-puppy-dog.png" alt="User Avatar" className="h-14 w-14 rounded-full" />
        <h2 className="font-semibold text-lg">Erşad Başbağ</h2>
      </div>
      <div className="mt-4">
        {/* Example of profile details like location, bio, etc. */}
        <p className="text-sm text-gray-600">Istanbul, Turkey</p>
      </div>
      {/* Additional elements like buttons or links */}
    </aside>
  );
};

export default ProfileSidebar;