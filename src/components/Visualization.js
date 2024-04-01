import React, { useState, useEffect } from 'react';
import PaperInfoBlock from './PaperInfoBlock';
import VisualizationBlock from './VisualizationBlock';
import RecommendationBlock from './RecommendationBlock';
import BodyForm from './BodyForm';
import { fetchPaperDoiByTitle } from '../service/CrossRefService';

export default function Visualization() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [doi, setDoi] = useState('');
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [fetchPaperComplete, setFetchPaperComplete] = useState(false);
  const [mainAuthorId, setMainAuthorId] = useState('');
  const [fetchAuthorComplete, setfetchAuthorComplete] = useState(false);

  const handleMainAuthorId = (authorId) => {
    setMainAuthorId(authorId);
    setfetchAuthorComplete(true);
  };

  const handleFormSubmit = (titleInput, questionInput, callback) => {
    setTitle(titleInput);
    setQuestion(questionInput);
    setSubmitTrigger(true);
    setFetchPaperComplete(false);
  
    fetchPaperDoiByTitle(titleInput)
      .then((fetchedDoi) => {
        setDoi(fetchedDoi);
        setSubmitTrigger(false);
        setFetchPaperComplete(true);
        callback();
      })
      .catch((error) => {
        console.error('Error fetching DOI:', error);
        setSubmitTrigger(false);
        setFetchPaperComplete(false);
        callback();
      });
  };


  console.log(title);
  console.log(doi);
  console.log(mainAuthorId);
  return (
    <div>
      <BodyForm onFormSubmit={handleFormSubmit} />

      {fetchPaperComplete && doi && <PaperInfoBlock doi={doi} onMainAuthorId={handleMainAuthorId} />}
      {fetchPaperComplete && doi && <RecommendationBlock doi={doi}/>}
      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}
// ICCV51070.2023.02110
