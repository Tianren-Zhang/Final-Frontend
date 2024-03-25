import React from 'react';
import { Link } from 'react-router-dom';
import iconImage from '../image/icon.png';

export default function Nav() {
  const scrollToContact = () => {
    const endSection = document.getElementById('end-section');
    console.log(endSection);
    if (endSection) {
      endSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('End section not found');
    }
  };

  return (
    <div className='nav-container'>
      <nav className='navbar shadow big-radius'>
        <div className='icon-container'>
          <Link to='/' className='link'>
            <img
              src={iconImage}
              alt='Application Icon'
              className='icon-image'
            />
          </Link>

          <span className='title'>Application Name</span>
        </div>
        <div>
          <button
            className='contact-us-button small-radius'
            onClick={scrollToContact}
          >
            Contact Us
          </button>
          <Link to='/main' className='link'>
            <button className='try-it-button small-radius'>Try it now!</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
