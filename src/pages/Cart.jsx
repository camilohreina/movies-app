import HeaderBar from '../components/HeaderBar';
import { useSelector } from 'react-redux';

export default function Cart() {
  const { booking } = useSelector((state) => state.booking);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full w-full">
      <HeaderBar showCartButton={false} />
      <div className="flex flex-row  justify-around w-full h-full text-white p-4">
        <div>
          <h1 className="text-3xl font-bold">Cart</h1>
          {booking && booking.length ? (
            <div className="flex flex-col items-center justify-center w-full h-full text-white p-4">
              {booking.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center w-full h-full text-white p-4"
                >
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                  <p>{item.seats.join(', ')}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div>
          <div>
            <div>
              <p>Name: Name </p>
              <p>LastName: LastName</p>
              <p>Email: Email</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Confirm Booking
            </button>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Need Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
