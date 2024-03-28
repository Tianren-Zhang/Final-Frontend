import React, { useState, useEffect } from 'react';
import { fetchPaperData } from '../service/CrossRefService';

export default function AuthorVisualizationBlock({ doi }) {
  const [paperData, setPaperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(doi);
  useEffect(() => {
    setLoading(true);
    fetchPaperData(doi)
      .then((data) => {
        setPaperData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setError(error.toString());
        setLoading(false);
      });
  }, [doi]);
  console.log('Success');
  console.log(paperData);

  if (paperData == null) {
    return;
  }
  return (
    <div className='block-container'>
      <div className='paper-info-block big-radius shadow'>
        {/* Always render the block, but conditionally display data, loading, or error messages within it */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <h2>{paperData.message.title[0]}</h2>
        <a
          href={`http://dx.doi.org/${paperData.message.DOI}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          DOI: {paperData.message.DOI}
        </a>
        <h3>Authors:</h3>
        <ul>
          {paperData.message.author.map((author, index) => (
            <li key={index}>
              {author.given} {author.family} -{' '}
              <small>
                {author.affiliation.map((aff) => aff.name).join(', ')}
              </small>
            </li>
          ))}
        </ul>
        <p>
          Published On: {paperData.message.published['date-parts'][0].join('-')}
        </p>
        {paperData.message.event && (
          <p>
            Conference: {paperData.message.event.name} in{' '}
            {paperData.message.event.location},{' '}
            {paperData.message.event.start['date-parts'][0].join('-')} to{' '}
            {paperData.message.event.end['date-parts'][0].join('-')}
          </p>
        )}

        <div className='actions-row'>
          {paperData.message.link && (
            <a
              href={paperData.message.link[0].URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              Access Paper
            </a>
          )}
          {paperData.message.license && (
            <a
              href={paperData.message.license[0].URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              License
            </a>
          )}

          <span>References: {paperData.message.reference.length}</span>
        </div>
        {/* Recommendations and any additional details can go here */}

        {!loading && !error && !paperData && <p>No data available.</p>}
      </div>
    </div>
  );
}
