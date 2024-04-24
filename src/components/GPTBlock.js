import React, { useState, useEffect } from 'react';
import { getGPTAnswer } from '../service/GPTService';

export default function GPTBlock({ inputText, title }) {
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (inputText) {
      getGPTAnswer(inputText, title).then((data) => {
        setResponse(data);
      });
    }
  }, [inputText, title]);
  console.log(response);
  const answerContent =
    response &&
    response.choices &&
    response.choices.length > 0 &&
    response.choices[0].message &&
    response.choices[0].message.content;

  return (
    <div className='block-container'>
      <div className='author-info-block big-radius shadow'>
        <h2>Question:</h2>
        <p>{inputText}</p>
        <h2>Answer:</h2>
        {answerContent ? <p>{answerContent}</p> : <p>No answer available.</p>}
      </div>
    </div>
  );
}
