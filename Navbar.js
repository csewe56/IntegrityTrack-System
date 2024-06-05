import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report-incident">Report Incident</Link></li>
        <li><Link to="/incident-list">Incident List</Link></li>
        <li><Link to="/user-profile">User Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

