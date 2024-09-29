import React from 'react';
import searchIcon from '../../images/_Compound Path_.png';
import webIcon from '../../images/web (1) 3.png';
import bottomArrorIcon from '../../images/Vector.png';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="search-container">
      <div className="search-icon">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <input type="text" className="search-bar" placeholder="Search..." />
       
      </div>
      <div className='web-Parent-container'>
        <img src={webIcon} alt="Web Icon" />
      </div>

      <div className="language-section">
        <span className="language-text">English</span>
        <div className="language-icon">
          <img src={bottomArrorIcon} alt="Language Icon" />
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="profile-section">
        <div className="profile-pic"></div>
        <div className="profile-info">
          <span className="profile-name">John Doe</span>
          <span className="profile-role">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
