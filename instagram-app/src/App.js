import React from "react";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/LoginPage";

const AuthenticateComponent = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
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

export default App;
