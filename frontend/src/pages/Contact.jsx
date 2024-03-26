import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const displayToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    displayToast('Message sent successfully');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contactpage'>
      {showToast && <div className="toast">{toastMessage}</div>} 
      <section>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below or via email.</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
