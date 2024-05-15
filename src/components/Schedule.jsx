import { useLocation } from 'wouter';
import ScheduleCap from './ScheduleCap';
import PropTypes from 'prop-types';

export default function Schedule({ movie }) {
  const [, navigate] = useLocation();

  const getFormatDate = () => {
    console.log('entra');
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    // Array of month names
    const monthsOfYear = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const day = today.getDate();
    const month = monthsOfYear[today.getMonth()];
    const year = today.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };

  const onBookingDate = (time) => {
    navigate(`/booking?movie=${movie.id}&time=${time} `);
  };

  return (
    <div className="container mx-auto flex items-center flex-col gap-12">
      <h1 className="text-white uppercase text-5xl font-bold">Schedule</h1>
      <p className="text-gray-400 font-bold text-2xl ">{getFormatDate()}</p>
      <div className="flex justify-center gap-4 max-w-lg flex-wrap">
        {movie.schedule.map((time, index) => (
          <ScheduleCap onBookingDate={onBookingDate} key={index} time={time} />
        ))}
      </div>
    </div>
  );
}

Schedule.propTypes = {
  movie: PropTypes.object.isRequired,
};
