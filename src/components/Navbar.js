import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Item Manager</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/items/add" className="navbar-link">Add Item</Link>
      </div>
    </nav>
  );
};
export default Navbar;
