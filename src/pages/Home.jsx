import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// 🔧 Dummy movie data
const mockMovies = [
  {
    movieId: '1',
    movieTitle: 'Inception',
    movieGenre: 'Action, Sci-Fi',
    movieReleaseDate: '2010',
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg'
  },
  {
    movieId: '2',
    movieTitle: 'Interstellar',
    movieGenre: 'Adventure, Drama, Sci-Fi',
    movieReleaseDate: '2014',
    poster: 'https://m.media-amazon.com/images/I/71yMHa3U2tL._AC_SY679_.jpg'
  },
  {
    movieId: '3',
    movieTitle: 'Dunkirk',
    movieGenre: 'Drama, War',
    movieReleaseDate: '2017',
    poster: 'https://m.media-amazon.com/images/I/81VJcIMQkGL._AC_SY679_.jpg'
  }
];

const genres = ["All", "Action", "Drama", "Adventure", "Sci-Fi", "War"];

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    setAllMovies(mockMovies);
    setFilteredMovies(mockMovies);
    document.title = 'Home - Film Hall Booking';
  }, []);

  const filterMoviesByGenre = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setFilteredMovies(allMovies);
    } else {
      const filtered = allMovies.filter(movie =>
        movie.movieGenre.toLowerCase().includes(genre.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className='dark:bg-slate-900'>
      {/* Genre Filter Buttons */}
      <div className="flex justify-center my-5">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`px-5 py-2 mx-2 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 font-semibold 
              ${selectedGenre === genre ? 'bg-red-500 text-white' : 'hover:bg-gray-400'}`}
            onClick={() => filterMoviesByGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className={`flex flex-wrap justify-start mt-10 w-[90vw] mx-auto dark:text-white`}>
        {filteredMovies.map((movie, index) => (
          <Link to={`/MovieDetails/${movie.movieId}`} key={index} className="mr-10 mb-7">
            <div className="w-[222px]">
              <div className="relative w-[222px] h-[340px] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.movieTitle}
                  className="w-[222px] h-[340px] rounded-md"
                />
              </div>
              <div className="my-2 font-medium">{movie.movieReleaseDate}</div>
              <div className="my-1 font-semibold">{movie.movieTitle}</div>
              <div className="my-1 text-sm opacity-80">{movie.movieGenre}</div>
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
};

export default Home;
