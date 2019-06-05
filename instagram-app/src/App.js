import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <SearchBar />
        </header>
        <main>
          {this.state.data.map(element => (
            <PostContainer key={element.id} {...element} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
