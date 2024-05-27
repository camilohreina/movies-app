import HeaderBar from '../components/HeaderBar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';  
import { Link } from 'wouter';
import { toast, ToastContainer } from 'react-toastify';

export default function Cart() {
  const { booking } = useSelector((state) => state.booking);
  const token = localStorage.getItem('token');
  const [infoSignIn, setInfoSignIn] = useState({ firstname: 'default', lastname: 'default', email: 'default' });
  console.log(infoSignIn);

  const notify = () => {
    toast.success('Booking completed!', {
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff'
      },
      autoClose: 1500, 
    });
  }
  
  useEffect(() => {
    if (token) {
      const storedInfoSignIn = localStorage.getItem('infoSignIn');
      setInfoSignIn(storedInfoSignIn ? JSON.parse(storedInfoSignIn) : infoSignIn);
    }
  }, [token]);

  return (
    <>
    <div className="container mx-auto flex flex-col items-center justify-center h-full w-full ">
      <HeaderBar showCartButton={false} />
      <div className="flex flex-col items-center justify-center w-full h-full text-white p-4 border-2 border-white rounded-lg ">
        <h1 className="text-3xl font-bold">Cart</h1>
        <div className="flex flex-row justify-around w-full h-full text-white p-4">
          <div className="w-1/2 border-2 border-white rounded-lg p-4">
            <h2 className="text-2xl font-bold text-center">Lista de reservas</h2>
            {booking && booking.length ? (
              <div className="flex flex-col items-center justify-center w-full h-full text-white p-4">
                {booking.map((item) => (
                  <div key={item.id} className="flex flex-col items-center justify-center w-full h-full text-white p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                    <div className="flex flex-row space-x-2">
                      {item.seats.map((seat, index) => (
                        <span key={index}>{seat}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">Tu carrito está vacío</p>
            )}
          </div>
          <div className="w-1/3 border-2 border-white rounded-lg p-4">
            {token ? (
              <div className="flex flex-col items-start justify-start w-full h-full text-white p-4">
                <p>Name: {infoSignIn.firstname}</p>
                <p>Lastname: {infoSignIn.lastname}</p>
                <p>Email: {infoSignIn.email}</p>
                <button
                  className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-lg py-2.5 px-8 w-full focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 mt-4 mb-4"
                  onClick={() => {
                    notify();
                    let existingBookings = JSON.parse(localStorage.getItem('booking')) || [];
                    
                    for (let newBooking of booking) {
                      // Comprueba si la reserva ya existe en 
                      if (!existingBookings.some(existingBooking => existingBooking.id === newBooking.id)) {
                        // Si no existe, añade la reserva 
                        existingBookings.push(newBooking);
                      }
                    }
                    localStorage.setItem('booking', JSON.stringify(existingBookings));
                    console.log(existingBookings);
                  }}
                >
                  Confirm booking
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-lg py-2.5 px-8 w-full focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 mt-4 mb-4">
                  Need to login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}
