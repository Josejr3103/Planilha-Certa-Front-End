import React from 'react';
import logo from '../assets/1.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate('/');
    };

  return (
    <nav className="navbar">
      <div  onClick={handleLogoClick} className="logo-container">
        <img 
       
          src={logo}
          alt="Logo" 
          className="logo" 
        />
      </div>
      <ul className="nav-links">
        
      </ul>
    </nav>
  );
};

export default Navbar;
