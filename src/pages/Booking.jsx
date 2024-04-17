import BackButton from '../components/BackButton';
import CinemaRoom from '../components/CinemaRoom';

export default function Booking() {
  const occupiedSeats = [3, 5, 10, 44, 55, 99, 87, 106]; // Indices of occupied seats
  const handleSeatClick = (seatNumber) => {
    console.log(`Seat ${seatNumber} was clicked.`);
    // Here you can implement logic to reserve or release the seat
  };

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
