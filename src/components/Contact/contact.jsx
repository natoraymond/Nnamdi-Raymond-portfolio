import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z3pgbvh',
        'template_o0p1kgi',
        form.current,
        '3MRfyUIE-bWV9YQzp_znT'
      )
      .then(
        () => {
          alert('Email sent successfully ✅');
          form.current.reset();
        },
        () => {
          alert('Failed to send email ❌');
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form below to discuss any work opportunities.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />

          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>

        {/* SOCIAL LINKS */}
        <div className="links">
          <a
            href="https://www.facebook.com/share/15mz9kBpbv/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/facebook.jpeg" alt="Facebook" className="link" />
          </a>

          <a
            href="https://github.com/natoraymond"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Github.jpeg" alt="GitHub" className="link" />
          </a>

          <a
            href="https://www.linkedin.com/in/nnadi-nnamdi-raymond-972abb234"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedin.jpeg" alt="LinkedIn" className="link" />
          </a>

          <a
            href="https://x.com/Natopato33?t=uRpWwSvbddZk1ao_5KVNEQ&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/twitt.jpeg" alt="Twitter / X" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

