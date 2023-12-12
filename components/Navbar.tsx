import React from 'react';
import styles from './Navbar.module.css'; // Assume you have styles defined

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <input className={styles.searchInput} type="search" placeholder="Search..." />
      {/* Icons for home, messages, notifications, tools */}
    </nav>
  );
};

export default Navbar;