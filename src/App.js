import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import Body from './components/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logined: true, // 임시
      userName: "Guest"
    }
  }

  handleLogin = (userName) => {
    this.setState({ userName, logined: true });
  }

  render() {
    const { logined, userName } = this.state;

    return (
      <div className="App">
        <Header userName={userName} />
        {logined ? <Body userName={userName} logined={logined} /> : <Login login={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
