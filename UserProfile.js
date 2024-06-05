import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await axios.get('/api/user/profile');
      setUserProfile(response.data);
    };
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Role: {userProfile.role}</p>
    </div>
  );
}

export default UserProfile;

