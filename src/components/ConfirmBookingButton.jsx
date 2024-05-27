import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

export default function ConfirmBookingButton({ onClickFn }) {
  const notify = () => {
    toast.success('Added succesfully!', {
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff'
      },
      autoClose: 1500, 
    });
  }
  return (
    <>
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => {
          onClickFn();
          notify();
        }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group uppercase bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-200 "
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add to cart
        </span>
      </button>
    </div>
    <ToastContainer />
    </>
  );
}

ConfirmBookingButton.propTypes = {
  onClickFn: PropTypes.func.isRequired,
};
