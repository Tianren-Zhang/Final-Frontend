import React, { useState, useEffect } from 'react';
import {
  fetchAuthorBasedOnAid,
  fetchPaperAuthorsBasedOnDoi,
} from '../service/SemanticScholarService';

export default function AuthorBlock({ doi }) {
  const [authorInformation, setAuthorInformation] = useState(null);

  useEffect(() => {
    if (doi) {
      fetchPaperAuthorsBasedOnDoi(doi)
        .then((data) => {
          if (data.data && data.data.length > 0) {
            const firstAuthorId = data.data[0].authorId; // Get the first author's ID
            return fetchAuthorBasedOnAid(firstAuthorId); // Fetch details for the first author
          }
          return Promise.reject('No authors found for this DOI.');
        })
        .then((authorDetails) => {
          setAuthorInformation(authorDetails);
        })
        .catch((error) => {
          console.error('Failed to fetch author details:', error);
          setAuthorInformation(null);
        });
    }
  }, [doi]);

  return (
    <div className='block-container'>
      <div className='author-info-block big-radius shadow'>
        {authorInformation ? (
          <div>
            <h3>
              <a
                href={authorInformation.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {authorInformation.name}
              </a>
            </h3>

            {authorInformation.papers && authorInformation.papers.length > 0 ? (
              <div className='author-paper-block'>
                <ul>
                  {authorInformation.papers.map((paper, index) => (
                    <li key={index}>
                      <a
                        href={paper.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {paper.title}
                      </a>
                      <p>{paper.abstract}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No papers available.</p>
            )}
          </div>
        ) : (
          <p>No author information available.</p>
        )}
      </div>
    </div>
  );
}
