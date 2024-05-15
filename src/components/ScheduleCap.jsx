import PropTypes from 'prop-types';
export default function ScheduleCap({ time, onBookingDate }) {
  return (
    <span
      onClick={() => onBookingDate(time)}
      className="bg-purple-100 cursor-pointer text-purple-800 text-lg font-bold me-2 px-4 py-2 rounded dark:bg-purple-900 dark:text-purple-300"
    >
      {time}
    </span>
  );
}

ScheduleCap.propTypes = {
  time: PropTypes.string.isRequired,
  onBookingDate: PropTypes.func.isRequired,
};
