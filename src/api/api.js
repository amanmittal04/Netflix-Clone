const API_KEY = "a498d53f6b66c1eb7fedde14f021b4b0";

const api = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
    
};

export default api;


// const API_KEY = process.env.REACT_APP_API;

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
// };

// export default requests;
