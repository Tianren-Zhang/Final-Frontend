import React from 'react';

export default function EndSection() {
  return (
    <footer className='end-section'>
      <div className='names-emails'>
        <div className='person'>
          <h3>Name 1</h3>
          <p>Email 1</p>
        </div>
        <div className='person'>
          <h3>Name 2</h3>
          <p>Email 2</p>
        </div>
        <div className='person'>
          <h3>Name 3</h3>
          <p>Email 3</p>
        </div>
      </div>
      <div className='icon'>
        <i className='fas fa-bookmark'></i>
      </div>
      <div className='copyright'>
        <p>@TCJ Team. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
