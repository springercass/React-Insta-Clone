import React from "react";
import "./LoginPage.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChange = element => {
    this.setState({ [element.target.name]: element.target.value });
  };

  submitLogin = element => {
    element.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <form className="loginForm">
        <header>
          <div className="welcome">Instagram</div>
          <div className="loginTitle">Welcome, Please Login</div>
        </header>
        <div className="textForm">
          <input
            type="text"
            placeholder="User Name"
            className="loginFormInput"
            name="username"
            value={this.state.username}
            onChange={this.inputChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="loginFormInput"
            name="password"
            value={this.state.password}
            onChange={this.inputChange}
          />
          <button className="loginButton" onClick={this.submitLogin}>
            Log In
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
