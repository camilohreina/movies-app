import { useEffect, useState } from 'react';
import CinemaRoom from '../components/CinemaRoom';
import { movies } from '../data/movies.json';
import { useSearch } from 'wouter';
import HeaderBar from '../components/HeaderBar';
import BookingSummary from '../components/BookingSummary';
import ConfirmBookingButton from '../components/ConfirmBookingButton';

export default function Booking() {
  //const occupiedSeats = [3, 5, 10, 44, 55, 99, 87, 106]; // Indices of occupied seats
  const [occupiedSeats, setOccupiedSeats] = useState([]); // Indices of occupied seats
  const [bookingSeats, setBookingSeats] = useState([]); // Indices of selected seats
  const queryString = useSearch();
  const [movieId, setMovieId] = useState(null);
  const [time, setTime] = useState(null);

  const handleSeatClick = (seatNumber) => {
    setBookingSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      } else {
        return [...prev, seatNumber];
      }
    });
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
  }, [occupiedSeats]);

  return (
    <div className="container mx-auto">
      <HeaderBar />
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
        bookingSeats={bookingSeats}
        onSeatClick={handleSeatClick}
      />

      <BookingSummary
        movieId={movieId}
        time={time}
        bookingSeats={bookingSeats}
      />
      <ConfirmBookingButton />
    </div>
  );
}
