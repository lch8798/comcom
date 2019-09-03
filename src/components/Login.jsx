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

  onLogin = (guest = false) => { 
    let userName = guest ? "Guest" : this.state.userName;

    if(userName == null || userName == "")
      return alert("이름을 입력하세요");
      
    this.props.login(userName);
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
          onClick={() => this.onLogin(false)}
        >Login</button>

        <button
          className="userNameInputButton"
          onClick={() => this.onLogin(true)}
        >Guest Login</button>
      </div>
    );
  }
}

export default Login;
