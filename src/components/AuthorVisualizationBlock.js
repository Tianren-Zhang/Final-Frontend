import React, { useState, useEffect } from 'react';
import { fetchPaperData } from '../service/SemanticScholarService';

export default function AuthorVisualizationBlock({ query }) {
  const [paperData, setPaperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  console.log(query);
  useEffect(() => {
    setLoading(true);
    fetchPaperData(query)
      .then((data) => {
        setPaperData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setError(error.toString());
        setLoading(false);
      });
  }, [query]);
  console.log("Success");
  console.log(paperData);
  return (
    <div className='block-container'>
      <div className='block big-radius shadow'>
        {/* Always render the block, but conditionally display data, loading, or error messages within it */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {paperData && (
          <>
            {/* Render paper data here */}
            <h1>{paperData.title}</h1>
            {/* You can add more paper details here */}
          </>
        )}
        {!loading && !error && !paperData && (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}
