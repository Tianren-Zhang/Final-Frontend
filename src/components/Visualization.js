import React, { useState, useEffect } from 'react';
import PaperInfoBlock from './PaperInfoBlock';
import VisualizationBlock from './VisualizationBlock';
import Body from './BodyForm';
import { fetchPaperDoiByTitle } from '../service/CrossRefService';

export default function Visualization() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [doi, setDoi] = useState('');
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [fetchComplete, setFetchComplete] = useState(false);

  const handleFormSubmit = (titleInput, questionInput, callback) => {
    setTitle(titleInput);
    setQuestion(questionInput);
    setSubmitTrigger(true);
    setFetchComplete(false);
  
    fetchPaperDoiByTitle(titleInput)
      .then((fetchedDoi) => {
        setDoi(fetchedDoi);
        setSubmitTrigger(false);
        setFetchComplete(true);
        callback(); // Reset isSubmitting in the Body component
      })
      .catch((error) => {
        console.error('Error fetching DOI:', error);
        setSubmitTrigger(false);
        setFetchComplete(false);
        callback(); // Reset isSubmitting in the Body component
      });
  };

  console.log(title);
  console.log(doi);
  return (
    <div>
      <Body onFormSubmit={handleFormSubmit} />

      {fetchComplete && doi && <PaperInfoBlock doi={doi} />}

      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}
// ICCV51070.2023.02110
