import PropTypes from 'prop-types';
import { movies } from '../data/movies.json';
export default function BookingSummary({ bookingSeats, movieId, time }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-300 font-bold text-2xl uppercase text-center">
        Booking Summary
      </h1>
      <div className="flex flex-col">
        {movieId && time && (
          <div className="flex flex-row justify-around">
            <p className="text-white text-2xl font-bold my-4">Movie: </p>
            <p className="text-white text-2xl font-bold my-4">
              {movies.find((movie) => movie.id == movieId).title}
            </p>
          </div>
        )}
        {movieId && time && (
          <div className="flex flex-row justify-around">
            <p className="text-white text-lg font-bold ">Time: </p>
            <p className="text-white text-lg font-bold ">{time}</p>
          </div>
        )}

        {bookingSeats.length > 0 && (
          <div className="flex flex-row justify-around flex-wrap">
            <p className="text-white text-lg font-bold my-4">Seats:</p>
            <p className="text-white text-lg font-bold my-4">
              {bookingSeats.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

BookingSummary.propTypes = {
  bookingSeats: PropTypes.array,
  movieId: PropTypes.string,
  time: PropTypes.string,
  movies: PropTypes.array,
};
