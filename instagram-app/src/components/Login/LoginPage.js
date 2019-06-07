import React from "react";
//import "./LoginPage.scss";
import styled from "styled-components";

const LoginForm = styled.form`
  width: 50%;
  border: 1px solid gray;
  margin: 30% auto;
  padding: 10%;
`;

const LoginHeader = styled.header`
  text-align: center;
`;

const Welcome = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const LoginTitle = styled.div`
  color: navy;
  padding: 2% 0;
  font-size: 1.5rem;
`;

const TextForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginFormInput = styled.input`
  text-align: left;
  width: 75%;
  margin: 5% 0 0 12.5%;
`;

const LoginButton = styled.button`
  width: 25%;
  margin: 5% 0 0 37.5%;
  background: white;
  border: 1px solid gray;
  height: 30px;
`;

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
      <LoginForm>
        <LoginHeader>
          <Welcome>Instagram</Welcome>
          <LoginTitle>Welcome, Please Login</LoginTitle>
        </LoginHeader>
        <TextForm>
          <LoginFormInput
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.inputChange}
          />
          <LoginFormInput
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.inputChange}
          />
          <LoginButton onClick={this.submitLogin}>Log In</LoginButton>
        </TextForm>
      </LoginForm>
    );
  }
}

export default Login;
