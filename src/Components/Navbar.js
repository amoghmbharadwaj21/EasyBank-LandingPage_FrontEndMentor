import React, { useState } from 'react'
//import introImage from './images/bg-intro-desktop.svg'
export default function Navbar(props) {





  //   return (
  //     <div className='navbar'>
  //       <div className='logo-image'>
  //         <img src={props.source} alt='logo' />
  //       </div>
  //       <div className='menu'>
  //         <ul id='menu-list'>
  //           <li className='menu-list-items'>Home</li>
  //           <li className='menu-list-items'>About</li>
  //           <li className='menu-list-items'>Contact</li>
  //           <li className='menu-list-items'>Blog</li>
  //           <li className='menu-list-items'>Careers</li>
  //         </ul>
  //       </div>
  //       <div className='request-button'>
  //         <button className='request-button-button navbar-button'>Request Invite</button>
  //       </div>
  //       <div className='hamburger-menu'>
  //         <img src={props.hamburger} alt='menu'/>
  //       </div>

  //     </div>
  //   )
  // }




  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>

      <div className='logo-image'>
        <img src={props.source} alt='logo' />
      </div>
      <div className='hamburger-menu-list'>
        <div className='hamburger-menu' onClick={toggleMenu}>
          <img src={props.hamburger} alt='menu' />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul id='menu-list'>
            <li className='menu-list-items'>Home</li>
            <li className='menu-list-items'>About</li>
            <li className='menu-list-items'>Contact</li>
            <li className='menu-list-items'>Blog</li>
            <li className='menu-list-items'>Careers</li>
          </ul>
        </div>
        <div className='request-button'>
          <button className='request-button-button navbar-button'>Request Invite</button>
        </div>
      </div>
      
      

    </div>
  );
};