import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Login from "./Pages/Account/Login";
import Sighup from "./Pages/Account/Sighup";
import AuthPage from "./Pages/AuthPages";
import Home from "./Components/Home";
import Archive from "./Components/Archive";
import Labels from "./Components/Lables";

import Profile from "./Components/Profile";

import Trash from "./Components/Trash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authpage" element={<AuthPage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="lables" element={<Labels />} />
          <Route path="trash" element={<Trash />} />
          <Route path="profile" element={<Profile />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sighup />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
