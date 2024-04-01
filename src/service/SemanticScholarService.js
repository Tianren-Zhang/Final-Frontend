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
  const url = `https://api.semanticscholar.org/recommendations/v1/papers/forpaper/${doi}?limit=10&fields=title,url,abstract,authors`;

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

const fetchPaperAuthorsBasedOnDoi = async (doi) => {
  const url = `https://api.semanticscholar.org/graph/v1/paper/${doi}/authors?fields=name,paperCount,citationCount,url&offset=2`;
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

// https://api.semanticscholar.org/graph/v1/paper/10.1109%2Ficcv51070.2023.02110/authors?fields=name,paperCount,citationCount,url&offset=2
const fetchAuthorBasedOnAid = async (authorId) => {
  const apiUrl = `https://api.semanticscholar.org/graph/v1/author/${authorId}?fields=name,url,papers.abstract,papers.authors,papers.url,papers.title`;
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching paper data:', error);
    throw error; // Re-throw to handle it in the component
  }
};

// 2156255943?fields=url,papers.abstract,papers.authors
export {
  fetchPaperData,
  fetchRecommendationPaperBasedOnDoi,
  fetchAuthorBasedOnAid,
  fetchPaperAuthorsBasedOnDoi,
};
