import React from 'react';
import { User } from '../interfaces/user';
import styles from './Profile.module.css'; // Make sure to create this CSS module.

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className={styles.profile}>
      <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className={styles.avatar} />
      <h1 className={styles.name}>{user.name}</h1>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
};

export default Profile;