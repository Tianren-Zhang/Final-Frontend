import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const RecommendationsNetwork = ({ doi, title }) => {
  // Added title parameter
  const [isLoading, setIsLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [parent, setParents] = useState([]);
  const [response, setResponse] = useState({});

  const data = [
    {
      domain: {
        x: [0.0, 1.0],
        y: [0.0, 1.0],
      },
      hovertemplate: 'label=%{label}<br>parent=%{parent}<extra></extra>',
      labels: ['Gluenet', 'computer vision', 'ai'],
      name: '',
      parents: ['', 'Gluenet', 'Gluenet'],
      type: 'treemap',
      root: {
        color: 'lightgrey',
      },
      marker: {
        cornerradius: 5,
      },
      textfont: {
        size: 24,
      },
    },
  ];

  const layout = {
    title: 'TreeMap Visualization',
    margin: {
      t: 5,
      l: 5,
      r: 5,
      b: 5,
    },
    font: {
      size: 24,
    },
  };
  const fetchRecommendations = async (doi) => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/semantic/easyrecommendations/${doi}`
    );
    if (!response.ok) throw new Error('Failed to fetch recommendations');
    const data = await response.json();
    return data.recommendedPapers; // Assuming this returns an array of recommendations
  };

  const buildRecommendationNetwork = async (initialDoi, initialTitle) => {
    setIsLoading(true);
    try {
      const initialRecommendations = await fetchRecommendations(initialDoi);
      // Create a set to track unique titles for children, including the initial title
      const uniqueTitles = new Set([initialTitle]);

      // Initialize children and parent relationships with direct recommendations
      const initialChildren = [];
      const initialParents = [];

      // Only consider up to the first 5 recommendations for direct connections
      const directRecommendations = initialRecommendations.slice(0, 5);
      directRecommendations.forEach((rec) => {
        if (!uniqueTitles.has(rec.title)) {
          // Ensure the recommended title is unique
          uniqueTitles.add(rec.title); // Mark this title as seen
          initialChildren.push(rec.title);
          initialParents.push(initialTitle); // The parent for these children is the initial paper
        }
      });

      // Fetch further recommendations for each of the direct recommendations
      const networkPromises = directRecommendations.map(async (rec) => {
        if (uniqueTitles.has(rec.title)) {
          // Proceed only if this title was successfully added (i.e., is unique)
          const furtherRecommendations = await fetchRecommendations(
            rec.paperId
          );
          return {
            parent: rec.title,
            children: furtherRecommendations
              .filter((furtherRec) => {
                const isUnique = !uniqueTitles.has(furtherRec.title);
                if (isUnique) uniqueTitles.add(furtherRec.title); // Add unique further recommendation titles
                return isUnique;
              })
              .map((furtherRec) => furtherRec.title),
          };
        }
        return null;
      });

      const network = (await Promise.all(networkPromises)).filter((n) => n); // Remove nulls (skipped duplicates)

      // Combine the initial direct relationships with the expanded network
      setChildren([...initialChildren, ...network.flatMap((n) => n.children)]);
      setParents([
        ...initialParents,
        ...network.flatMap((n) => Array(n.children.length).fill(n.parent)),
      ]);

      // Now the payload for the fetch call needs both the children and their parents
      const payload = {
        children: [...initialChildren, ...network.flatMap((n) => n.children)],
        parent: [
          ...initialParents,
          ...network.flatMap((n) => Array(n.children.length).fill(n.parent)),
        ],
      };

      // Corrected fetch call to send the combined data
      const response = await fetch(
        'http://127.0.0.1:5000/api/semantic/treemap-data',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Pass the corrected payload
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json(); // Parsing the JSON response body
      setResponse(responseData); // Update your state with the response
    } catch (error) {
      console.error('Error building recommendation network:', error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(parent);
  console.log(children);
  console.log(response);
  useEffect(() => {
    if (doi && title) {
      // Ensure both doi and title are provided before proceeding
      buildRecommendationNetwork(doi, title);
    }
  }, [doi, title]); // Include title in the dependency array

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='block-container'>
      <div className='recommendation-block big-radius shadow'>
        <h2>Recommendation Network</h2>

        {response ? (
          <div>
            <Plot
              data={response.data}
              layout={response.layout}
              style={{ width: '800px', height: '400px' }}
            />
          </div>
        ) : (
          <p>Please wait</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationsNetwork;
