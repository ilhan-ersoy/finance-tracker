import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";



// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import {useAuthContext} from "./hooks/useAuthContext";


function App() {
    const {user} = useAuthContext()
  return (
      <div>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route exact="/" path="/" element={user ? <Home/> : (<div>App</div>)} />
                  <Route path="/login" element={user ? <Home/> : <Login/> } />
                  <Route path="/signup" element={user ? <Home/> : <Signup/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

