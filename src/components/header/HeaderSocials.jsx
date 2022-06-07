import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/tomáš-moc-58033a233/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/tomasmoc" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/tomas.moc/" target="_blank" rel="noreferrer"><BsFacebook/></a>
       
           
    </div>
  )
}

export default HeaderSocials