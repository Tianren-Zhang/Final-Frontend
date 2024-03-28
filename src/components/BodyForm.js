import React, { useState } from 'react';

export default function Body({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onFormSubmit(title, question);
  };

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <input
            className='input-field small-radius'
            type='text'
            placeholder='Please type the question!'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className='button-container'>
          <button className='submit-button small-radius' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
