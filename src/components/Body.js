import React from 'react';

export default function Body() {
  return (
    <div className='form-container'>
      <div className='form shadow big-radius'>
        <div className='mb-4'>
          <h2 className='heading'>Example instruction</h2>
        </div>
        <div className='mb-4'>
          <input
            className='input-field small-radius'
            type='text'
            placeholder='Please type the full title of the paper!'
          />
        </div>
        <div className='mb-6'>
          <input
            className='input-field small-radius'
            type='text'
            placeholder='Please type the question!'
          />
        </div>
        <div className='button-container'>
          <button className='submit-button small-radius'>Submit</button>
        </div>
      </div>
    </div>
  );
}
