import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  if (!user) return null;
  return (
    <div className="profile-card">
      <div className="profile-avatar">{user.name[0]}</div>
      <h2>{user.name}</h2>
      <div className="profile-details">
        <div><strong>User ID:</strong> {user.id}</div>
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email ID:</strong> {user.email}</div>
        <div><strong>Phone:</strong> {user.phone}</div>
        <div><strong>Address:</strong> {user.address.street} {user.address.suite}, {user.address.city}</div>
      </div>
    </div>
  );
};

export default ProfileCard; 