const apiKey = "2d97c17e6a6d4f52123e4b8aa7dc283a";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
};

export default requests;
