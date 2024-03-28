import React, { useState } from 'react';

const PaperInfoBlock = ({ paperData }) => {
  // Assuming paperData contains all the information from the API response
  
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);

  const toggleAbstractVisibility = () => setIsAbstractVisible(!isAbstractVisible);

  return (
    <div className="paper-info-block">
      <h2>{paperData.message.title[0]}</h2>
      <a href={`http://dx.doi.org/${paperData.message.DOI}`} target="_blank" rel="noopener noreferrer">DOI: {paperData.message.DOI}</a>
      <h3>Authors:</h3>
      <ul>
        {paperData.message.author.map((author, index) => (
          <li key={index}>
            {author.given} {author.family} - <small>{author.affiliation.map(aff => aff.name).join(", ")}</small>
          </li>
        ))}
      </ul>
      <p>Published On: {paperData.message.published['date-parts'][0].join('-')}</p>
      {paperData.message.event && (
        <p>
          Conference: {paperData.message.event.name} in {paperData.message.event.location}, {paperData.message.event.start['date-parts'][0].join('-')} to {paperData.message.event.end['date-parts'][0].join('-')}
        </p>
      )}
      {paperData.message.link && (
        <a href={paperData.message.link[0].URL} target="_blank" rel="noopener noreferrer">Access Paper</a>
      )}
      {paperData.message.license && (
        <a href={paperData.message.license[0].URL} target="_blank" rel="noopener noreferrer">License</a>
      )}
      <button onClick={toggleAbstractVisibility}>
        {isAbstractVisible ? 'Hide Abstract' : 'Show Abstract'}
      </button>
      {isAbstractVisible && <p>{/* Abstract text here, if available */}</p>}
      <p>Citations: {paperData.message['is-referenced-by-count']}</p>
      <p>References: {paperData.message.reference.length}</p>
      {/* Recommendations and any additional details can go here */}
    </div>
  );
};

export default PaperInfoBlock;
