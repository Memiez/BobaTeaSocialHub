// pages/user/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Fetch user data from your API
      fetch(`/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default UserProfilePage;
