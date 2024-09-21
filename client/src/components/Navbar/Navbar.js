import React from 'react';

const Navbar = ({ text }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="heading-section">{text}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
