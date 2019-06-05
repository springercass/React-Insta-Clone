import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <div className="leftSearch">
          <div className="logo">
            <i className="fab fa-instagram" />
          </div>
          <h1>Instagram</h1>
        </div>
        <input
          name="search"
          onChange={this.props.searchFilter}
          placeholder="Search"
          type="text"
          value={this.props.newSearch}
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
  }
}
export default SearchBar;
