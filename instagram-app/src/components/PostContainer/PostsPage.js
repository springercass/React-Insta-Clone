import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data.js";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: []
    };
  }

  changeHandler = element => {
    this.setState({
      [element.target.name]: element.target.value
    });
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  searchFilter = element => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(element.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    return (
      <div className="App">
        <header className="Header">
          <SearchBar
            newSearch={this.state.search}
            searchFilter={this.searchFilter}
          />
        </header>
        <main>
          <PostContainer
            data={this.state.data}
            filteredPosts={this.state.filteredPosts}
            searchFilter={this.searchFilter}
          />
        </main>
      </div>
    );
  }
}
export default PostsPage;
