import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Genres from "./Genres";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        likedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="w-[160px] max-h-[300px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <div className="white-space-normal text-xs md:text-sm font-bold flex flex-col gap-4 justify-center items-center h-full text-center">
            {truncateString(item?.title, 20)}
            <Genres genreIds={item.genre_ids} />
          </div>
          <p onClick={saveMovie}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-red-600" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
