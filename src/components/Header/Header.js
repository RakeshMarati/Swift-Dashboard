import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user }) => (
  <header className="swift-header">
    <div className="swift-header-left">
      <img src="/swift-logo.svg" alt="Swift Logo" className="swift-logo" />
      <span className="swift-title">SWIFT</span>
    </div>
    <div className="swift-header-right">
      {user && (
        <Link to="/profile" className="swift-user-link">
          <span className="swift-user-name">{user.name}</span>
          <div className="swift-user-avatar">{user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : ''}</div>
        </Link>
      )}
    </div>
  </header>
);

export default Header; 