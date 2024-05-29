import HeaderBar from '../components/HeaderBar';
import ProfileCard from '../components/ProfileCard';
import { users } from '../data/users.json';
export default function About() {
  return (
    <div className="flex flex-col">
      <HeaderBar />
      <h1 className="text-gray-300 font-bold text-4xl uppercase text-center my-14">
        About Us
      </h1>
      <div className="my-14 flex flex-row gap-8 justify-center">
        {users.map((user) => (
          <ProfileCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
