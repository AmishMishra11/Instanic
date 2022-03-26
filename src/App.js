import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Login from "./Pages/Account/Login";
import Sighup from "./Pages/Account/Sighup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sighup />} />
      </Routes>
    </div>
  );
}

export default App;
