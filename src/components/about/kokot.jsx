import React from 'react';
import ME from './';
import './about.css';
import {FiAward} from 'react-icons/fi';

const kokot = () => {
  return (
    <section id='about'>
        <h5>Můžeš se dozvědět</h5>
        <h2>O mně</h2>

        <div className='container_about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                    <img src={ME} alt="" />
                </div>
            </div>

            <div className='about_content'>
                <div className='about_cards'>
                    <article className='about_card'>
                    <FiAward className='about_icon'/>
                    <h5></h5>
                    <small></small>
                    </article>

                    <article className='about_card'>
                    <FiAward className='about_icon'/>
                    <h5></h5>
                    <small></small>
                    </article>

                    <article className='about_card'>
                    <FiAward className='about_icon'/>
                    <h5></h5>
                    <small></small>
                    </article>
                </div>

                <p>Blablalalald</p>

                <a href="#contact" className='btn btn-primary'>Nasrat</a>

            </div>
        
        </div>


    </section>
  )
}

export default kokot