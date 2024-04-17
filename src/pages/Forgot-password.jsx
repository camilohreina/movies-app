
import BackButton from "../components/BackButton";
export default function ForgotPassword() {
    return(<>
    <BackButton />
    <form className="flex justify-center items-center h-full">
        <div className= "flex flex-col justify-center items-center m-1 p-8 border-2 border-gray-700 rounded ">
            <h1 className="text-white text-3xl font-bold text-center w-full" > Reset password </h1>
            <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4 "
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="juanito@gmail.com"
                required
            />
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-lg py-2.5 px-8 w-full focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 mt-4 mb-4"
                >
                    Reset my password
                </button>
            </div>
        </div>    
    </form>
    </>

    );
}