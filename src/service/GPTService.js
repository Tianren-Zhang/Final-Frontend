import axios from 'axios';

const getGPTAnswer = async (inputText, title) => {
  const config = {
    method: 'post',
    url: 'http://localhost:5000/ask',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      input: `For the paper ${title}, could you search, and answer this question for me? ${inputText}. Please tell me as much as possible!`,
    },
    timeout: 10000,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

export { getGPTAnswer };
