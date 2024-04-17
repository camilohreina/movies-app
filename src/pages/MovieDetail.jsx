import { useParams } from 'wouter';
import { movies } from '../data/movies.json';
export default function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) return <h1 className="text-white">Movie not found</h1>;
  return (
    <div className="container mx-auto flex justify-around">
      <div className="max-w-lg flex flex-col gap-8">
        <h1 className="text-white text-8xl font-bold uppercase">
          {movie.title}
        </h1>
        <div className="flex flex-row items-center">
          <img src="/imdb.png" alt="" className="object-cover w-10 mr-4" />
          <span className="text-white font-bold text-lg mr-4">7.8</span>
          <span className="text-gray-300 text-lg  mr-3">|</span>
          <span className="text-gray-400 mr-4">{movie.runtime} min</span>
          <span className="text-gray-400 text-lg  mr-3">|</span>
          <span className="text-gray-400 text-lg  mr-4">{movie.year} </span>
          <span className="text-gray-400 text-lg  mr-3">|</span>
          {movie.genres.map((genre, index) => (
            <span key={index} className="text-gray-400 mr-4">
              {genre}
            </span>
          ))}
        </div>
        <div>
          <p className="text-white font-bold text-xl">Top Cast</p>
          <p className="text-gray-400 font-semibold text-lg">{movie.actors}</p>
        </div>
        <blockquote className="border-l-2 border-gray-500 text-gray-400 p-4 my-4">
          <p className="text-xl font-medium text-balance">{movie.plot}</p>
        </blockquote>
      </div>
      <div>
        <img
          className="object-fill opacity-80  border-gray-800 border-8"
          src={movie.posterUrl}
          alt={movie.title}
        />
      </div>
    </div>
  );
}
