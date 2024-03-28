import React, { useState } from 'react';

export default function Body({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Indicate submission is in progress

    onFormSubmit(title, question, () => setIsSubmitting(false));
  };

  return (
    <div className='form-container'>
      <div className='form shadow big-radius'>
        {/* Form content */}
        <div className='mb-4'>
          <input
            className='input-field small-radius'
            type='text'
            placeholder='Please type the full title of the paper!'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting} // Optional: Disable input fields while submitting
          />
        </div>
        <div className='mb-6'>
          <input
            className='input-field small-radius'
            type='text'
            placeholder='Please type the question!'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isSubmitting} // Optional: Disable input fields while submitting
          />
        </div>
        <div className='button-container'>
          <button
            className='submit-button small-radius'
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
