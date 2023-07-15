import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  // Todo: user could be null
  
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={ user ? <Home/>: <Login/> }/>

        <Route exact path="/login" element={ user ? <Navigate to="/" replace /> : <Login/>}/>

        <Route exact path="/register" element={ user ? <Navigate to="/" replace /> : <Register />} />

        <Route exact path="/profile/:username" element={ user ? <Profile /> : <Navigate to="/login"/>}/>

      </Routes>
    </Router>
  );
}

export default App;
