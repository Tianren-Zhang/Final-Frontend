import React from 'react';

export default function Body() {
  return (
    <div className='form-container'>
      <div className='mb-4'>
        <h2 className='heading'>
          Please fill out the form below
        </h2>
      </div>
      <div className='mb-4'>
        <input
          className='input-field'
          type='text'
          placeholder='Please type the full title of the paper!'
        />
      </div>
      <div className='mb-6'>
        <input
          className='input-field'
          type='text'
          placeholder='Please type the question!'
        />
      </div>
      <div className='flex justify-end'>
        <button className='submit-button'>
          Submit
        </button>
      </div>
    </div>
  );
}
