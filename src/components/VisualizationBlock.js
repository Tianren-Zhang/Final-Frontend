import React from 'react';

export default function visualizationBlock({ information }) {
  return (
    <div className='bg-white shadow-custom rounded-lg p-8 w-full max-w-4xl h-32'>
      This is block {information}
    </div>
  );
}
