import React from 'react';
import { User } from '../interfaces/user';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="text-center p-4">
      <img src={user.avatarUrl} alt={`${user.username}'s avatar`} className="w-24 h-24 rounded-full mx-auto" />
      <h1 className="text-2xl font-semibold mt-2">{user.username}</h1>
      <p className="text-gray-600">{user.bio}</p>
    </div>
  );
};

export default Profile;
