import React from 'react';
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Tomáš Moc</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">O mně</a></li>
        <li><a href="#experience">Zkušenosti</a></li>
        <li><a href="#services">Služby</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Doporučení</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Tomáš Moc. Všechna práva vyhrazena.</small>
      </div>
    </footer>
  )
}

export default Footer