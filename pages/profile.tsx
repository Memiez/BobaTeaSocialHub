// pages/profile.tsx
import React from 'react';
import { UserProfile } from '../interfaces/profile';

const Profile: React.FC<{ userProfile: UserProfile }> = ({ userProfile }) => {
  return (
    <div>
      <img src={userProfile.avatarUrl} alt={`${userProfile.name}'s avatar`} />
      <h1>{userProfile.name}</h1>
      <p>{userProfile.bio}</p>
      {/* Render user's posts here */}
    </div>
  );
};

export default Profile;
