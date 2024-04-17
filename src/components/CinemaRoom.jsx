export default function CinemaRoom({
  numRows,
  numSeatsPerRow,
  occupiedSeats,
  onSeatClick,
}) {
  function Seat({ occupied, onClick }) {
    const color = occupied ? '#db6e6e' : '#2b28d5';
    return (
      <div
        className="w-8 h-8 m-4 cursor-pointer rounded"
        style={{
          backgroundColor: color,
        }}
        onClick={onClick}
      ></div>
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
    for (let seat = 0; seat < numSeatsPerRow; seat++) {
      const seatNumber = row * numSeatsPerRow + seat;
      const occupied = occupiedSeats?.includes(seatNumber);
      seats.push(
        <Seat
          key={seatNumber}
          occupied={occupied}
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
