import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="nav-container">
      <h2 onClick={() => navigate("/")}>Instanic</h2>
      <div className="nav-login">
        Amish
        <i
          onClick={logout}
          className="fa-solid fa-arrow-right-from-bracket"
        ></i>
      </div>
    </nav>
  );
}

export default Nav;
