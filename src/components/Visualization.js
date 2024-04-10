import React, { useState, useEffect } from 'react';
import PaperInfoBlock from './PaperInfoBlock';
import VisualizationBlock from './VisualizationBlock';
import RecommendationBlock from './RecommendationBlock';
import FetchAndVisualizeCitations from './BarVisualization';
import AuthorBlock from './AuthorBlock';
import BodyForm from './BodyForm';
import RecommendationsNetwork from './RecommendationNetwork';
import { fetchPaperDoiByTitle } from '../service/CrossRefService';

export default function Visualization() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [doi, setDoi] = useState('');
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [fetchPaperComplete, setFetchPaperComplete] = useState(false);
  // const [mainAuthorId, setMainAuthorId] = useState('');
  // const [fetchAuthorComplete, setfetchAuthorComplete] = useState(false);

  // const handleMainAuthorId = (authorId) => {
  //   setMainAuthorId(authorId);
  //   setfetchAuthorComplete(true);
  // };

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

  return (
    <div>
      <BodyForm onFormSubmit={handleFormSubmit} />

      {fetchPaperComplete && doi && <PaperInfoBlock doi={doi} />}
      {fetchPaperComplete && doi && <AuthorBlock doi={doi} />}
      {fetchPaperComplete && doi && <RecommendationBlock doi={doi} />}
      {fetchPaperComplete && doi && <RecommendationsNetwork doi={doi} title={title} />}
      {fetchPaperComplete && doi && <FetchAndVisualizeCitations doi={doi} />}
    </div>
  );
}
// ICCV51070.2023.02110 RecommendationsNetwork
