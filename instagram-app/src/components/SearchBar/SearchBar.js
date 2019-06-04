import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="leftSearch">
        <div className="logo">
          <i class="fab fa-instagram" />
        </div>
        <div>Instagram</div>
      </div>
      <input className="input" placeholder="Search" />
      <div className="rightSearch">
        <div className="rightIcon">
          <img />
        </div>
        <div className="rightIcon">
          <img />
        </div>
        <div className="rightIcon">
          <img />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
