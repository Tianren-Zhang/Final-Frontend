import React from 'react';

export default function nav() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center pt-8'>
      <nav className='bg-white shadow-custom rounded-lg mb-4 py-4 w-full max-w-4xl px-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <i className='fas fa-bookmark text-blue-500 mr-2'></i>
          <span className='font-bold text-xl'>Application Name</span>
        </div>
        <div>
          <button className='text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-l'>
            Contact Us
          </button>
          <button className='text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-r'>
            Try it now!
          </button>
        </div>
      </nav>
    </div>
  );
}
