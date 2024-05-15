import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Capsule from '../components/Capsule';
import HeaderBar from '../components/HeaderBar';
import { movies as AllMovies, genres } from '../data/movies.json';
import { useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState(AllMovies);

  const searchMoviesByName = (word) => {
    if (!word) return setMovies(AllMovies);
    const searchLower = word.toLowerCase();
    const searchResult = AllMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchLower)
    );
    setMovies(searchResult);
  };

  const searchMoviesByGenre = (genre) => {
    const searchGenre = AllMovies.filter((movie) =>
      movie.genres.includes(genre)
    );
    setMovies(searchGenre);
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full w-full">
      <HeaderBar showBackButton={false} />
      <SearchBar searchMovies={searchMoviesByName} />
      <div className="flex max-w-4xl w-full flex-row flex-wrap gap-4 justify-center my-16">
        {genres.map((genre) => (
          <Capsule
            key={genre}
            genre={genre}
            searchMoviesByGenre={searchMoviesByGenre}
          />
        ))}
      </div>
      {movies.length === 0 ? (
        <div className="text-2xl font-bold text-center text-white">
          No movies found
        </div>
      ) : (
        <div className=" flex flex-row my-16 flex-wrap w-full gap-8 items-center justify-center">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
