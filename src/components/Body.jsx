import React, { Component } from 'react';
import './Body.css';

import ProtocolItem from './ProtocolItem';

const protocolInfo = [
  "GET",
  "POST",
  "Socket"
];

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }

  render() {
    return (
      <div className="Body">
          <div className="itemList">
            {itemList.map((item, i) => <ProtocolItem itemInfo={item} detailInfo={itemDetails[item.id]} key={i} />)}
          </div>
      </div>
    );
  }
}

export default Body;

const itemList = [
  {
    id: 1,
    name: "getUserInfo",
    protocol: 0,
    example: "user/getUserInfo",
    info: "유저 정보 요청",
  },
  {
    id: 2,
    name: "join",
    protocol: 0,
    example: "user/join",
    info: "유저 회원가입",
  },
  {
    id: 3,
    name: "setUserInfo",
    protocol: 1,
    example: "user/setUserInfo=string",
    info: "유저 정보 세팅",
  },
];

const itemDetails = {
  "1": {
    info: "!!!!! 1번임 afasgq"
  },
  "2": {
    info: "2번임 ㅠㅠㅠㅠㅠㅠㅠㅠㅠ"
  },
  "3": {
    info: "3번임"
  }
}