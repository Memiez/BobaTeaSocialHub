import React from 'react';
import Profile from '../components/Profile';
import { User } from '../interfaces/user';

const ProfilePage: React.FC = () => {
  // Example user data, this would come from your API or user context in a real app
  const userProfile: User = {
    id: '1',
    name: 'Jane Doe',
    bio: 'This is a short bio about Jane Doe.',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Transparent-jack-russell-puppy-dog.png', // Replace with the actual path to the user's avatar image
  };

  return (
    <div>
      <Profile user={userProfile} />
      {/* Here you might include other components like user posts, settings, etc. */}
    </div>
  );
};

export default ProfilePage;