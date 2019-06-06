import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: []
    };
  }

  render() {
    return (
      <div className="App">
        <main>
          <AuthenticateComponent />
        </main>
      </div>
    );
  }
}

const AuthenticateComponent = withAuthenticate(PostsPage)(LoginPage);

export default App;
