import { useState, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import requests from "../Requests";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        const popularMovies = response.data.results;
        const movie =
          popularMovies[Math.floor(Math.random() * popularMovies.length)];
        setMovies(movie);
      } catch (err) {
        console.error("Error fetching random movie:", err);
      }
    };

    fetchMovies();

    const interval = setInterval(fetchMovies, 10000);

    return () => clearInterval(interval);
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt={movies?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movies?.title}</h1>
          <div className="flex gap-3 my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 flex items-center gap-2 rounded-lg">
              <BsFillPlayCircleFill className="text-black" />
              Play
            </button>
            <button className=" bg-red-600 text-white  py-2 px-5 flex items-center gap-2 rounded-lg">
              <BsFillPlayCircleFill className="text-white" />
              Watch Trailer
            </button>
          </div>
          <p className="text-sm text-gray-300">
            Released: {movies?.release_date}
          </p>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <FaImdb className="text-yellow-500" />
              <p>{movies?.vote_average} / 10</p>
            </div>
            <div className="flex gap-2 items-center">
              <GiTomato className="text-red-600" />
              <p>{Math.floor(movies?.popularity / 10)} % </p>
            </div>
          </div>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-2">
            {truncateString(movies?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
