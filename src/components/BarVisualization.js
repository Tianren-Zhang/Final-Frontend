import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FetchAndVisualizeCitations = ({ doi }) => {
  const [citationsData, setCitationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCitations = async () => {
      setIsLoading(true);
      let offset = 0;
      const limit = 1000;
      let fetchedCitations = [];
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/${doi}/citations?fields=year&offset=${offset}&limit=${limit}`);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          fetchedCitations = [...fetchedCitations, ...data.data];
          hasMore = data.next !== null;
          offset += limit;
        } catch (error) {
          console.error("Error fetching citation data:", error);
          setIsLoading(false);
          return;
        }
      }

      // Aggregate citations by year
      const yearCounts = fetchedCitations.reduce((acc, citation) => {
        const year = citation.year;
        if (!acc[year]) {
          acc[year] = { year, count: 1 };
        } else {
          acc[year].count += 1;
        }
        return acc;
      }, {});

      setCitationsData(Object.values(yearCounts).sort((a, b) => a.year - b.year));
      setIsLoading(false);
    };

    fetchCitations();
  }, [doi]);

  if (isLoading) {
    return <div>Loading citations...</div>;
  }

  return (
    <div>
      <h2>Citations by Year</h2>
      <BarChart
        width={500}
        height={300}
        data={citationsData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default FetchAndVisualizeCitations;
