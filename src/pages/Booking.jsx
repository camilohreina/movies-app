import { useEffect, useState } from 'react';
import CinemaRoom from '../components/CinemaRoom';
import { movies } from '../data/movies.json';
import { useSearch } from 'wouter';
import HeaderBar from '../components/HeaderBar';
import BookingSummary from '../components/BookingSummary';
import ConfirmBookingButton from '../components/ConfirmBookingButton';
import { useDispatch } from 'react-redux';
import { addBooking } from '../store/slices/booking';
import { toast, ToastContainer } from 'react-toastify';

export default function Booking() {
  //const occupiedSeats = [3, 5, 10, 44, 55, 99, 87, 106]; // Indices of occupied seats
  const [occupiedSeats, setOccupiedSeats] = useState([]); // Indices of occupied seats
  const [bookingSeats, setBookingSeats] = useState([]); // Indices of selected seats
  const queryString = useSearch();
  const [movieId, setMovieId] = useState(null);
  const [time, setTime] = useState(null);
  const dispatch = useDispatch();
  const handleSeatClick = (seatNumber) => {
    setBookingSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      } else {
        return [...prev, seatNumber];
      }
    });
  };

  const getQueryParams = () => {
    const urlParams = new URLSearchParams(queryString);
    const movie = urlParams.get('movie');
    const urlTime = urlParams.get('time');
    setTime(urlTime);
    setMovieId(movie);
  };

  const getOccupiedSeats = ({ id }) => {
    const movie = movies.find((movie) => movie.id == id);
    const bookingSeats = movie.booking[time];
    const foundSeats = JSON.parse(localStorage.getItem('booking'))?.filter((seat) => seat.id == id && seat.time == time)[0]?.seats;
    const finalSeats = foundSeats ? [...bookingSeats, ...foundSeats] : bookingSeats;
    setOccupiedSeats(finalSeats);
  };

  const onAddBooking = () => {
    const booking = {
      id: movieId,
      title: movies.find((movie) => movie.id == movieId).title,
      time: time,
      seats: bookingSeats,
    };
    dispatch(addBooking(booking));
  };

  useEffect(() => {
    getQueryParams();
  }, []);

  useEffect(() => {
    if (movieId) {
      getOccupiedSeats({ id: movieId });
    }
  }
  , [movieId, time]);

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
      <ConfirmBookingButton onClickFn={onAddBooking} />
    </div>
  );
}
