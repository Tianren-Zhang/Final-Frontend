const fetchPaperData = async (query) => {
  const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=covid+vaccination&offset=100&limit=3`;

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

const fetchRecommendationPaperBasedOnDoi = async (doi) => {
  const url = `https://api.semanticscholar.org/recommendations/v1/papers/forpaper/${doi}?limit=5&fields=title,url,abstract,authors`;

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



export { fetchPaperData, fetchRecommendationPaperBasedOnDoi };
