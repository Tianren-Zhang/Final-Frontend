// src/services/SemanticScholarService.js

const fetchPaperData = async (query) => {
    const url = `https://api.semanticscholar.org/graph/v1/paper/autocomplete?query=${encodeURIComponent(query)}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching paper data:', error);
      throw error; // Re-throw to handle it in the component
    }
  };
  
  export { fetchPaperData };
  