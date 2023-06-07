import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06g0kl4', 'template_oi3sngf', form.current, 'ENMdmqpl2f8jJnf9O')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <div name='Contact' className='w-full lg:px-10 xl:px-40'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-2 rounded-2xl p-6 bg-lightblue'>
          <div className="w-auto h-auto flex items-center justify-center">
            <h2 className='text-4xl font-bold border-b-4 border-orange inline'>Contact</h2>
          </div>
          <p className='py-6 w-auto h-auto flex items-center justify-center'>Submit the form below to get in touch</p>
          <div className='flex justify-center items-center'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2' >
              <input type='text' name='user_name' placeholder='Enter your name...' required className='p-2 bg-transparent rounded-md border-2 focus:outline-none' />
              <input type='email' name='user_email' placeholder='Enter your email...' required className='p-2 my-4 bg-transparent rounded-md border-2 focus:outline-none'
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
              <textarea name='message' rows='10' placeholder='Enter your message...' required className='p-4 bg-transparent rounded-md border-2 focus:outline-none'></textarea>
              <button type="submit" vallue="Send" className='rounded-md bg-brown px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300'>Send!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
