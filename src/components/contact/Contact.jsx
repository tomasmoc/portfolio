import React from 'react';
import "./contact.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from 'emailjs-com';
import {useRef} from 'react'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nh4z0ki', 'template_s8h3jkm', form.current, 'Dg-CCKugU8TnoTfLj')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Můžem si dát vědět</h5> 
      <h2>Kontaktuj mě</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tomas_moc@yahoo.com</h5>
            <a href="mailto:tomas_moc@yahoo.com" target="_blank" rel="noreferrer">Odeslat zprávu</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook.com/tomas.moc</h5>
            <a href="https://m.me/tomas.moc" target="_blank" rel="noreferrer">Odeslat zprávu</a>
          </article>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+420604424706</h5>
            <a href="https://api.whatsapp.com/send?phone=+420604424706" target="_blank" rel="noreferrer">Odeslat zprávu</a>
          </article>


        </div>



        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Jméno a příjmení' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="8" placeholder='Co máš na srdci'></textarea>
          <button type='submit'>Odeslat</button>

        </form>


      </div>
    </section>
  )
}

export default Contact