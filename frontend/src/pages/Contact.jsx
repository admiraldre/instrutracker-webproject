import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <section>
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below or via email.</p>

                <form id="contact-form" action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </section>
    </div>
  )
}

export default Contact
