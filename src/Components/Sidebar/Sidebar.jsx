import React from 'react';
import logo from '../../images/image 8.png';
import dashboarIcon from '../../images/dashboard.png';
import menuIcon from '../../images/Fork.png';
import orderIcon from '../../images/order list.png';
import reportIcon from '../../images/Fork.png';
import moreIcon from '../../images/Menu.png';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item sidebar-logo">
        
 <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-item">
        <div className="icon">
        <img src={dashboarIcon} alt="Dashboard Icon" />
        </div>
        <span className="item-text">Dashboard</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><img src={menuIcon} alt="Menu Managment Icon" /></div>
        <span className="item-text">Menu Management</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><img src={orderIcon} alt="Order Icon" /></div>
        <span className="item-text">Orders</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><img src={reportIcon} alt="Report Icon" /></div>
        <span className="item-text">Reports</span>
      </div>
      <div className="sidebar-item">
        <div className="icon"><img src={moreIcon} alt="More Icon" /></div>
        <span className="item-text">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
