import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }

  onInputUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  onLogin = () => { 
    if(this.state.userName == null || this.state.userName == "")
      return alert("이름을 입력하세요");
      
    this.props.login(this.state.userName);
  }

  onKeyDownLogin = (e) => { if(e.keyCode == 13) this.onLogin(); }

  render() {
    const { userName } = this.state;

    return (
      <div className="Login">
        <h3>User Name</h3>
        <input 
          className="userNameInput"
          input="text"
          value={userName}
          onChange={this.onInputUserName}
          onKeyDown={this.onKeyDownLogin}
        ></input>
        <button
          className="userNameInputButton"
          onClick={this.onLogin}
        >Login</button>
      </div>
    );
  }
}

export default Login;
