import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const currentUser = localStorage.getItem("first");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("first");
    localStorage.removeItem("last");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <nav className="nav-container">
      <h2 onClick={() => navigate("/")}>Instanic</h2>
      <div className="nav-login">
        {currentUser}
        <i
          onClick={logout}
          className="fa-solid fa-arrow-right-from-bracket"
        ></i>
      </div>
    </nav>
  );
}

export default Nav;
