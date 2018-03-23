import React from 'react';
import { Link } from 'react-router-dom';
import authHelper from '../Auth';

const Navbar = () => (
  <nav className="navbar sticky-top navbar-toggleable-md navbar-inverse" style={{ backgroundColor: '#008000' }}>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <Link to="/" className="navbar-brand">Habit Tracker</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" />
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          {authHelper.isAuthenticated() && <Link to="/dashboard" className="nav-link active">Dashboard<span className="sr-only">(current)</span></Link>}
        </li>
        <li className="nav-item">
          {authHelper.isAuthenticated() && <Link to="/challenge" className="nav-link">Challenges</Link> }
        </li>
        <li className="nav-item">
          {authHelper.isAuthenticated() && <Link to="/summary" className="nav-link">Summary</Link> }
        </li>
        <li className="nav-item">
          {!authHelper.isAuthenticated() && <Link to="/login" className="nav-link">Login</Link> }
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
