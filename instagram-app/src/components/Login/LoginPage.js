import React from "react";

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
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <form className="loginForm">
        <h1>Instagram</h1>
        <div className="loginTitle">Welcome, Please Login</div>
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
        <button className="loginButton" onClick={this.inputChange.loginSubmit}>
          Log In
        </button>
      </form>
    );
  }
}

export default Login;
