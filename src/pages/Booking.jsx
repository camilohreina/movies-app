import React, { useEffect, useState } from 'react';
import CinemaRoom from '../components/CinemaRoom';
import { movies } from '../data/movies.json'; // Asegúrate de tener tus datos de películas aquí
import { useSearch } from 'wouter';
import HeaderBar from '../components/HeaderBar';
// import Cart from '../components/Cart'; // Nuevo componente para el carrito

const Booking = () => {
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]); // Nuevo estado para sillas seleccionadas
  const queryString = useSearch();
  const [movieId, setMovieId] = useState('');
  const [time, setTime] = useState('');

  const handleSeatClick = (seatNumber) => {
    console.log(`Seat ${seatNumber} was clicked.`);
    // Aquí puedes implementar la lógica para reservar o liberar el asiento
    // Por ejemplo, agregar o eliminar el asiento seleccionado en el estado selectedSeats
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
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
  }, []);

  return (
    <div className="container mx-auto">
      <HeaderBar />
      <div className="flex flex-col items-center mb-24">
        <h1 className="text-white font-bold text-6xl uppercase">Cinema Room</h1>
        <div className="w-1/2 bg-slate-700 h-5 rounded my-8">
          <p className="text-center text-sm text-gray-400 font-bold">SCREEN</p>
        </div>
      </div>
      <CinemaRoom
        numRows={9}
        numSeatsPerRow={14}
        occupiedSeats={occupiedSeats}
        selectedSeats={selectedSeats} // Pasa el estado de sillas seleccionadas al componente CinemaRoom
        onSeatClick={handleSeatClick}
      />
      <Cart selectedSeats={selectedSeats} /> {/* Renderiza el componente Cart */}
    </div>
  );
};

export default Booking;
