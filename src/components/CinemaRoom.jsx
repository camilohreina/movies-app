export default function CinemaRoom({
  numRows,
  numSeatsPerRow,
  occupiedSeats,
  onSeatClick,
  bookingSeats,
}) {
  function Seat({ number, occupied, selected, onClick }) {
    let color = '#2b28d5';
    if (selected) {
      color = '#5ED854';
    }
    if (occupied) {
      color = '#db6e6e';
    }
    return (
      <div
        className="w-9 h-9 m-4 cursor-pointer rounded text-sm flex place-items-center place-content-center text-gray-500 font-bold"
        style={{
          backgroundColor: color,
        }}
        onClick={onClick}
      >
        {number}
      </div>
    );
  }

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const seats = [];

  for (let row = 0; row < numRows; row++) {
    for (let seat = 1; seat <= numSeatsPerRow; seat++) {
      const seatNumber = row * numSeatsPerRow + seat;
      const occupied = occupiedSeats?.includes(seatNumber);
      const selected = bookingSeats?.includes(seatNumber);
      seats.push(
        <Seat
          key={seatNumber}
          number={seatNumber}
          occupied={occupied}
          selected={selected}
          onClick={() => onSeatClick(seatNumber)}
        />
      );
    }
  }

  const arrayOfChunks = chunkArray(seats, numSeatsPerRow);

  return (
    <div>
      {arrayOfChunks.map((row, index) => (
        <div key={index} className="flex justify-center">
          {row}
        </div>
      ))}
    </div>
  );
}
