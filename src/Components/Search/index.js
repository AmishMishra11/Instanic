import React from "react";
import "./styles.css";
function Search() {
  return (
    <div className="search-container">
      <button>
        <i class="fas fa-2x fa-light fa-magnifying-glass"></i>
      </button>
      <input placeholder="Search" />

      <button>
        <i class="fas fa-2x fa-light fa-sliders"></i>
      </button>
    </div>
  );
}

export default Search;
