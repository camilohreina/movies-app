import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import CinemaRoom from '../components/CinemaRoom';
import { movies } from '../data/movies.json';
import { useSearch } from 'wouter';

export default function Booking() {
  //const occupiedSeats = [3, 5, 10, 44, 55, 99, 87, 106]; // Indices of occupied seats
  const [occupiedSeats, setOccupiedSeats] = useState([]); // Indices of occupied seats
  const queryString = useSearch();
  const [movieId, setMovieId] = useState('');
  const [time, setTime] = useState('');

  const handleSeatClick = (seatNumber) => {
    console.log(`Seat ${seatNumber} was clicked.`);
    // Here you can implement logic to reserve or release the seat
  };

  const getQueryParams = () => {
    const urlParams = new URLSearchParams(queryString);
    const movie = urlParams.get('movie');
    const time = urlParams.get('time');
    setMovieId(movie);
    setTime(time);
    getOccupiedSeats({ id: movie });
  };

  const getOccupiedSeats = ({ id }) => {
    const movie = movies.find((movie) => movie.id == id);
    const bookingSeats = movie.booking[time];
    setOccupiedSeats(bookingSeats);
  };

  useEffect(() => {
    getQueryParams();
  });

  return (
    <div className="container mx-auto">
      <BackButton />
      <div className="flex  flex-col items-center mb-24">
        <h1 className="text-white font-bold text-6xl uppercase">Cinema Room</h1>
        <div className="w-1/2 bg-slate-700 h5 rounded my-8">
          <p className="text-center text-sm text-gray-400 font-bold">SCREEN</p>
        </div>
      </div>
      <CinemaRoom
        numRows={9}
        numSeatsPerRow={14}
        occupiedSeats={occupiedSeats}
        onSeatClick={handleSeatClick}
      />
    </div>
  );
}
