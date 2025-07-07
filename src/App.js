import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import CommentsDashboardPage from './pages/CommentsDashboardPage';
import Header from './components/Header/Header';
import './App.css';

const USER_API = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(USER_API)
      .then(res => res.json())
      .then(data => setUser(data[0]))
      .catch(() => setUser(null));
  }, []);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/dashboard" element={<CommentsDashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
