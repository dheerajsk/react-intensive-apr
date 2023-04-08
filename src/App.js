import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { SignUp } from './pages/SignUp/Signup';
import {Login} from "./pages/Login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} ></Route>
          <Route path='register' element={<SignUp />} ></Route>
          <Route path='login' element={<Login />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
