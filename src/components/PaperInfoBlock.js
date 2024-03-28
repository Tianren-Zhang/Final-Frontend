import React, { useState, useEffect } from 'react';
import { fetchPaperData } from '../service/CrossRefService';

export default function AuthorVisualizationBlock({ doi }) {
  const [paperData, setPaperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(doi);
  console.log('start doi');
  useEffect(() => {
    if (doi) {
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
    }
  }, [doi]);
  console.log('Success');
  console.log(paperData);

  if (loading) {
    return (
      <div className='block-container'>
        <div className='block big-radius shadow'>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !paperData || paperData.error) {
    return (
      <div className='block-container'>
        <div className='block big-radius shadow'>
          <p>Error: {error || 'No data available.'}</p>
        </div>
      </div>
    );
  }

  const { message } = paperData;

  return (
    <div className='block-container'>
      <div className='paper-info-block big-radius shadow'>
        <h2>{message.title?.[0]}</h2>
        {message.DOI && (
          <a
            href={`http://dx.doi.org/${message.DOI}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            DOI: {message.DOI}
          </a>
        )}
        {message.author && (
          <>
            <h3>Authors:</h3>
            <ul>
              {message.author.map((author, index) => (
                <li key={index}>
                  {author.given} {author.family} -{' '}
                  <small>
                    {author.affiliation?.map((aff) => aff.name).join(', ')}
                  </small>
                </li>
              ))}
            </ul>
          </>
        )}
        {message.published && (
          <p>Published On: {message.published['date-parts']?.[0]?.join('-')}</p>
        )}
        {message.event && (
          <p>
            Conference: {message.event.name} in {message.event.location},{' '}
            {message.event.start['date-parts']?.[0]?.join('-')} to{' '}
            {message.event.end['date-parts']?.[0]?.join('-')}
          </p>
        )}
        <div className='actions-row'>
          {message.link?.[0]?.URL && (
            <a
              href={message.link[0].URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              Access Paper
            </a>
          )}
          {message.license?.[0]?.URL && (
            <a
              href={message.license[0].URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              License
            </a>
          )}
          <span>References: {message.reference?.length || 0}</span>
        </div>
      </div>
    </div>
  );
}
