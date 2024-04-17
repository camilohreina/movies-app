export default function BackButton() {
  return (
    <button
      className="ml-16 w-10 text-white  rounded"
      onClick={() => window.history.back()}
    >
      <svg
        className="w-[35px] h-[35px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 19-7-7 7-7"
        />
      </svg>
    </button>
  );
}
