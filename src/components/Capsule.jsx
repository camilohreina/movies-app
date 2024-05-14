import PropTypes from 'prop-types';

export default function Capsule({ genre, searchMoviesByGenre }) {
  return (
    <span
      onClick={() => searchMoviesByGenre(genre)}
      className="bg-purple-100 text-purple-800 cursor-pointer text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
    >
      {genre}
    </span>
  );
}

Capsule.propTypes = {
  genre: PropTypes.string.isRequired,
  searchMoviesByGenre: PropTypes.func.isRequired,
};
