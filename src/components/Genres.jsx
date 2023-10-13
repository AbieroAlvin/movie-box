import { useState, useEffect } from "react";
import axios from "axios";
const Genres = ({ genreIds }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = "2d97c17e6a6d4f52123e4b8aa7dc283a";
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );

        const genreMap = Object.fromEntries(
          response.data.genres.map((genre) => [genre.id, genre.name])
        );

        const movieGenres = genreIds.map((genreId) => genreMap[genreId]);

        setGenres(movieGenres);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchGenres();
  }, [genreIds]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return <p className="">{truncateString(genres.join(", "), 20)}</p>;
};

export default Genres;
