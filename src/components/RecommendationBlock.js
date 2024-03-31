import React, { useState, useEffect } from 'react';
import { fetchRecommendationPaperBasedOnDoi } from '../service/SemanticScholarService';

export default function RecommendationBlock({ doi }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (doi) {
      fetchRecommendationPaperBasedOnDoi(doi)
        .then((data) => {
          setRecommendations(data.recommendedPapers || []);
        })
        .catch((error) => {
          console.error('Failed to fetch recommendations:', error);
          setRecommendations([]);
        });
    }
  }, [doi]); // Refetch recommendations if DOI changes

  return (
    <div className='block-container'>
      <div className='recommendation-block big-radius shadow'>
        <h3>Recommended Papers:</h3>
        <div className='recommendation-paper'>
          {recommendations.length > 0 ? (
            <ul>
              {recommendations.map((paper, index) => (
                <li key={index}>
                  <a href={paper.url} target='_blank' rel='noopener noreferrer'>
                    {paper.title}
                  </a>
                  <p>
                    Authors:{' '}
                    {paper.authors.map((author) => author.name).join(', ')}
                  </p>
                  <p>{paper.abstract}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
