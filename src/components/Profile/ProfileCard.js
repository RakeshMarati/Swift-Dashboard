import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  if (!user) return null;
  return (
    <div className="profile-card">
      <div className="profile-avatar">{user.name[0]}</div>
      <h2>{user.name}</h2>
      <div className="profile-email">{user.email}</div>
      <div className="profile-divider" />
      <div className="profile-details">
        <div>
          <div className="profile-details-label">User ID</div>
          <div className="profile-details-value">{user.id}</div>
        </div>
        <div>
          <div className="profile-details-label">Name</div>
          <div className="profile-details-value">{user.name}</div>
        </div>
        <div>
          <div className="profile-details-label">Email ID</div>
          <div className="profile-details-value">{user.email}</div>
        </div>
        <div>
          <div className="profile-details-label">Address</div>
          <div className="profile-details-value">{user.address.street} {user.address.suite}, {user.address.city}</div>
        </div>
        <div>
          <div className="profile-details-label">Phone</div>
          <div className="profile-details-value">{user.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 