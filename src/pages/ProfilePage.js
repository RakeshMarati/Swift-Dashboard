import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/Profile/ProfileCard';
import './ProfilePage.css';

const USER_API = 'https://jsonplaceholder.typicode.com/users';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(USER_API)
      .then(res => res.json())
      .then(data => setUser(data[0]))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page-outer">
      <button onClick={() => navigate('/dashboard')} className="profile-back-btn">
        <span className="profile-back-arrow">&#8592;</span> <span>Welcome, {user.name}</span>
      </button>
      <ProfileCard user={user} />
    </div>
  );
};

export default ProfilePage; 