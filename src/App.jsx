import { Route } from 'wouter';
import Home from './pages/Home';
import Login from './pages/Login';
import MovieDetail from './pages/MovieDetail';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="inset-0 -z-10 min-h-screen w-full my-15 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="/booking" component={Booking} />
    </div>
  );
}

export default App;
