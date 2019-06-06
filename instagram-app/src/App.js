import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends React.Component {
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
        <main>
          <PostsPage />
        </main>
      </div>
    );
  }
}

export default App;
