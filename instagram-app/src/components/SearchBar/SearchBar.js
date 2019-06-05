import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="leftSearch">
        <div className="logo">
          <i className="fab fa-instagram" />
        </div>
        <h1>Instagram</h1>
      </div>
      <input
        className="input"
        placeholder="Search"
        onChange={props.searchChange}
      />
      <div className="rightSearch">
        <div className="rightIcon">
          <i className="far fa-compass" />
        </div>
        <div className="rightIcon">
          <i className="far fa-heart" />
        </div>
        <div className="rightIcon">
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
