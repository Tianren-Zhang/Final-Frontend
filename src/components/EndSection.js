import React from 'react';

export default function EndSection() {
  return (
    <footer id='end-section' className='end-section'>
      <div className='names-emails'>
        <div className='person'>
          <h3>Tianren Zhang</h3>
          <p>zhang.tianre@northeastern.edu</p>
        </div>
        <div className='person'>
          <h3>Jiaxing He</h3>
          <p>he.jiaxi@northeastern.edu</p>
        </div>
        <div className='person'>
          <h3>Charles Joseph</h3>
          <p>joseph.ch@northeastern.edu</p>
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
