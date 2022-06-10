import React from 'react';
import "./header.css";
import UVOD from "./UVOD"; 
import ME from '../../assets/header/me.jpg';
import HeaderSocials from './HeaderSocials';


function Header() {
  return (
    <section id='header'>
      <div className="container header_container">
      
        <h5>Ahoj, já jsem</h5>
        <h1>Tomáš Moc</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        
        <HeaderSocials />
        <UVOD />
        
        <div className='me'>
          <img src={ME} alt='me' /> 
        </div>
        <a href="#contact" className='scroll_down'>Posunout dolů</a>
      </div>

      
    </section>
  )
}

export default Header
