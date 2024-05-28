import { Link, useLocation } from 'wouter';
import BackButton from '../components/BackButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from '../firebase/config';
import {toast, ToastContainer} from 'react-toastify';

export default function Login() {

  const [location, setLocation] = useLocation();

  const notify = (message, type) => {
    toast[type](message, {
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff'
      },
      autoClose: 1500, 
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    signInWithEmailAndPassword(database, email, password).then(
      async(userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log('User logged in successfully');
          const token = await user.getIdToken();
          localStorage.setItem('token', token);
          notify('Login completed!', 'success');
          setTimeout(() => {
            const prevLocation = localStorage.getItem('prevLocation');
            setLocation(prevLocation || '/');
          }, 2000);
          
        } else {
          console.log('User not logged in');
          setTimeout(() => notify('Login failed!', 'error'), 1000);
        }
      }
    ).catch((error) => {
      console.error('Error logging in:', error);
      setTimeout(() => notify('Login failed!', 'error'), 1000);
    });

};

  return (
    <>
      <BackButton />
      <div className="flex flex-col justify-center items-center m-1 p-8 ">
        <div className="m-1 p-16 bg-transparent shadow-lg flex gap-8 my-4 justify-center flex-col items-center rounded border-2 border-gray-700 w-1/2">
          <h1 className="text-white text-3xl uppercase font-bold text-center w-full">
            Login
          </h1>
          <form onSubmit={(e) => handleSubmit(e)} className="w-full px-20">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-lg py-2.5 w-full focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 mt-4 mb-4"
              >
                Log In
              </button>
            </div>
            <div className="max-w-lg text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Don't have an account yet?
                <Link 
                href="/Sign-Up"
                className="text-purple-500 hover:text-pink-500 font-semibold text-sm ml-2"
                  >Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
