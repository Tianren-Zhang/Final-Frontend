import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-container'>
      <nav className='navbar shadow big-radius'>
        <div className='icon-container'>
          <i className='fas fa-bookmark text-blue-500 mr-2'></i>
          <span className='font-bold text-xl'>Application Name and Icon</span>
        </div>
        <div>
          <button className='contact-us-button small-radius'>
            Contact Us
          </button>
          <Link to="/main" className='link'>
            <button className='try-it-button small-radius'>
              Try it now!
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

