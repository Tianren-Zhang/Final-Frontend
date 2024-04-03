const fetchRecommendationPaperBasedOnDoi = async (doi) => {
  const encodedDoi = encodeURIComponent(doi);
  const url = `http://127.0.0.1:5000/api/semantic/recommendations/${encodedDoi}`;

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
// http://127.0.0.1:5000/api/recommendations/
const fetchPaperAuthorsBasedOnDoi = async (doi) => {
  
  const url = `http://127.0.0.1:5000/api/semantic/paper_authors/${doi}`;

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
  const url = `http://127.0.0.1:5000/api/semantic/authors/${authorId}`;

  try {
    const response = await fetch(`${url}`);
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
  fetchRecommendationPaperBasedOnDoi,
  fetchAuthorBasedOnAid,
  fetchPaperAuthorsBasedOnDoi,
};
