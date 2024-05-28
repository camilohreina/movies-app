import { useParams} from 'wouter';
import { movies } from '../data/movies.json';
import AboutMovie from '../components/AboutMovie';
import Schedule from '../components/Schedule';
import HeaderBar from '../components/HeaderBar';
export default function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) return <h1 className="text-white">Movie not found</h1>;
  return (
    <div className="flex gap-24 flex-col">
      <HeaderBar />
      <AboutMovie movie={movie} />
      <Schedule movie={movie} />
    </div>
  );
}
