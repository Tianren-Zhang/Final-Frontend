import React from 'react';

export default function visualizationBlock({ information }) {
  return (
    <div className='block-container'>
      <div className='block big-radius shadow'>{information}</div>
    </div>
  );
}
