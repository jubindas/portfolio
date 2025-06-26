import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact({ darkMode }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9d5061k',           // Your service ID
      'template_23ra80t',          // Your template ID
      formRef.current,
      '_ktXMl3aWhOeymFIA'          // Your public key
    ).then(
      () => {
        alert('✅ Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        alert('❌ Failed to send message.');
        console.error(error.text);
      }
    );
  };

  return (
    <section className={`contact-section ${darkMode ? 'dark' : 'light'}`} id="contact">
      <h2 className="contact-title">Hire Me</h2>
      <p className="contact-subtitle">Interested in working together? Send me a message below!</p>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="reply_to" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
