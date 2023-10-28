const SEARCH = 'http://www.omdbapi.com/?s='
const apiKey = '6910fcce'


export const fetchMovies = async (movieSearchTerm) => { 
  try {
    const response = await fetch(`${SEARCH}${movieSearchTerm}&apikey=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    console.log(data)      
    return data;
  } catch (error) {
    // Handle errors, log, or throw as necessary  
    throw error;
  }
};