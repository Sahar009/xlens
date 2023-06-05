import React from 'react'
import './contact.css'
import{MdAttachEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
     
      <h5 className='contact_text'>Get In Touch</h5>
      <h2 className='contact_text2'> Contact Us</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5> X-lens@gmail.com</h5>
            <a href="mailto:X-lens" target='_blank'> Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5> +234(9072053010)</h5> */}
            <a href="https://api.whatsapp.com/send?phone=23409072053010" target='_blank'> Send a message</a>
          </article>
         
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>


            <input type="email"name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact