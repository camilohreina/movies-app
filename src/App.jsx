import { Route } from 'wouter';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Sign-Up';
import ForgotPassword from './pages/Forgot-password';

import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="inset-0 -z-10 min-h-screen w-full my-15 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </div>
  );
}

export default App;
