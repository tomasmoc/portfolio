import React from 'react';
import CV from "../../assets/header/cv.pdf"

const UVOD  = () => {
  return (
    <div className='uvod'>
        <a href={CV} download className='btn'>Můj životopis</a>
        <a href='#contact' className='btn btn-primary'>Dej mi vědět</a>
    </div>
  )
}

export default UVOD 