import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const FetchAndVisualizeCitations = ({ doi }) => {
  const [citationsData, setCitationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCitations = async () => {
      setIsLoading(true);
      let offset = 0;
      const limit = 1000;
      let fetchedCitations = [];

      try {
        console.log("Start fetching data");
        const response = await fetch(
          `http://127.0.0.1:5000/api/semantic/authors/citations/${doi}?${offset}&limit=${limit}`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        fetchedCitations = [...fetchedCitations, ...data.data];
        console.log(fetchedCitations);
      } catch (error) {
        console.error('Error fetching citation data:', error);
        setIsLoading(false);
        return;
      }
      console.log("Finished Fetching, start aggregation");
      // Aggregate citations by year
      const yearCounts = fetchedCitations.reduce((acc, citation) => {
        const year = citation.citingPaper.year;
        if (!acc[year]) {
          acc[year] = { year, count: 1 };
        } else {
          acc[year].count += 1;
        }
        return acc;
      }, {});

      setCitationsData(
        Object.values(yearCounts).sort((a, b) => a.year - b.year)
      );
      setIsLoading(false);
      console.log(citationsData);
      console.log("Finished Aggregation");
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
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='year' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='count' fill='#82ca9d' />
      </BarChart>
    </div>
  );
};

export default FetchAndVisualizeCitations;
