const fetchPaperData = async (doi) => {
  const url = `https://api.crossref.org/works/10.1109/${doi}`;

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

const fetchPaperByTitle = async (title) => {
  const url = `https://api.crossref.org/works?query.title="${encodeURIComponent(title)}"`;

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


export { fetchPaperData, fetchPaperByTitle };
