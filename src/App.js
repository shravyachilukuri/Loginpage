import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Logout from "./components/logout";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user)
  return (
    <div className="App">
      {user ? <Logout></Logout> : <Login></Login>}
      
    </div>
  );
}

export default App;
