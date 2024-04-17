import ScheduleCap from './ScheduleCap';

export default function Schedule({ movie }) {
  return (
    <div className="container mx-auto flex items-center flex-col gap-12">
      <h1 className="text-white uppercase text-5xl font-bold">Schedule</h1>
      <div className="flex justify-center gap-4 max-w-lg flex-wrap">
        {movie.schedule.map((time, index) => (
          <ScheduleCap key={index} time={time} />
        ))}
      </div>
    </div>
  );
}
