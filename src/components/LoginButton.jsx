import { Link, useLocation} from 'wouter';
import { useState, useEffect } from 'react';

export default function LoginButton() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [infoSignIn, setInfoSignIn] = useState(JSON.parse(localStorage.getItem('infoSignIn')) || {});
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const tokenListener = () => {
      setToken(localStorage.getItem('token'));
      setInfoSignIn(JSON.parse(localStorage.getItem('infoSignIn')) || {});
    };

    window.addEventListener('storage', tokenListener);

    return () => {
      window.removeEventListener('storage', tokenListener);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('infoSignIn');
    setToken(null); 
    setInfoSignIn({}); 
    setLocation('/');
  }

  const handleLogin = () => {
    setLocation('/login', {from: location});
  }

  return (
    <div className="flex w-full justify-center">
      {token ? (
        <div className="flex items-center">
          <button
            className="relative inline-flex place-items-start p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            onClick={handleLogout}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Log Out
            </span>
          </button>
          <span className="ml-4 text-white">{infoSignIn.firstname}</span>
        </div>
      ) : (
        <Link
          href="/login"
        >
          <button
            onClick={handleLogin}
            className="relative inline-flex place-items-start p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Log In
            </span>
        </button>
        </Link>
      )}
    </div>
  );
}