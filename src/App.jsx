import { Route } from 'wouter';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="inset-0 -z-10 min-h-screen w-full my-15 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
