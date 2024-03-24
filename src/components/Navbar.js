import React from 'react';

export default function Nav() {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='icon-container'>
          <i className='fas fa-bookmark text-blue-500 mr-2'></i>
          <span className='font-bold text-xl'>Application Name</span>
        </div>
        <div>
          <button className='contact-us-button'>
            Contact Us
          </button>
          <button className='try-it-button'>
            Try it now!
          </button>
        </div>
      </nav>
    </div>
  );
}

