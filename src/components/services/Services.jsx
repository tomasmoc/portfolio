import React from 'react';
import './services.css';
import {HiCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id="services">
      <h5>Co nabízím</h5>
      <h2>Služby</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
        
          <ul className='service_list'>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
        
          <ul className='service_list'>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>
        
          <ul className='service_list'>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consecteur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services