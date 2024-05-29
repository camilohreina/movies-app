export default function ProfileCard({ user }) {
  return (
    <div
      key={user.id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-36 h-36 mb-3 rounded-full shadow-lg object-cover object-top my-8"
          src={`/profile/${user.image}`}
          alt={`${user.name} image`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.role}
        </span>
      </div>
    </div>
  );
}
