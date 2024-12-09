import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs= () => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  return (
    <div className="resource-support-container">
      {/* <div className="left-panel">
        <h2>Resources & Support</h2>
        <a
          href="#"
          className={`doc-link ${linkClicked ? 'clicked' : ''}`}
          onClick={handleLinkClick}
        >
          Documentation Link
        </a>
      </div> */}

      <div className="right-panel">
        <div className="form-container">
          <form className="support-form">
            <h3 style={{border: '10px solid rgb(31, 134, 0)',
    textAlign: 'center'}}>Contact Us</h3>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Query" className="form-textarea"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
