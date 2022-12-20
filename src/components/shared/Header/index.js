import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import img from '../../../assets/Group 32.png'
import Logo from "../Logo";

const Header = ({handleLight, handleDark, color, data, handleLangPt, handleLangEn}) => {
  return (
    <div style={{width: '100%'}}>

    <nav className="m-1 header">
      <Logo/>
        <div className="menu-container">

      <ul className="header-nav menu">
        <li><a>{data.texts.header.home}</a></li>
        <li><a>{data.texts.header.aboutme}</a></li>
        <li><a>{data.texts.header.portfolio}</a></li>
        <li><a>{data.texts.header.contact}</a></li>
    
      </ul>
        </div>

      <ul className="header-nav">
        <li>
         <button onClick={handleLight}><BsSun color={color}/> </button> 
        </li>
        <li>
         <button onClick={handleDark}> <BsMoon color={color}/> </button>
        </li>
      
        <li className='btn lang-icon' onClick={handleLangPt}>PT</li> |
        <li className='btn lang-icon' onClick={handleLangEn}>EN</li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;
