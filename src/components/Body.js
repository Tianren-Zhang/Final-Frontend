import React from 'react';

export default function body() {
  return (
    <div className='bg-white shadow-custom rounded-lg mb-4 p-8 w-full max-w-4xl'>
      <div className='mb-4'>
        <h2 className='text-gray-700 text-lg font-semibold'>
          Please fill out the form below
        </h2>
      </div>
      <div className='mb-4'>
        <input
          className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          type='text'
          placeholder='Please type the full title of the paper!'
        />
      </div>
      <div className='mb-6'>
        <input
          className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          type='text'
          placeholder='Please type the question!'
        />
      </div>
      <div className='flex justify-end'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Submit
        </button>
      </div>
    </div>
  );
}
