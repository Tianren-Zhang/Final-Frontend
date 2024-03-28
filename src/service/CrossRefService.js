const fetchPaperData = async (doi) => {
  const url = `https://api.crossref.org/works/${doi}`;

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

const fetchPaperDoiByTitle = async (title) => {
  const url = `https://api.crossref.org/works?query.title="${encodeURIComponent(title)}"`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data.message.items[0].DOI;
  } catch (error) {
    console.error('Error fetching paper data:', error);
    throw error; // Re-throw to handle it in the component
  }
};


export { fetchPaperData, fetchPaperDoiByTitle };
