import React, { Component } from 'react';
import './ProtocolItem.css';

const protocolInfo = [
  "GET",
  "POST",
  "Socket"
];

class ProtocolItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }

  on = () => { this.setState({ on: !this.state.on }); }
  
  render() {
    const { on } = this.state;
    const { itemInfo, detailInfo } = this.props;
    return (
      <div className={"ProtocolItem " + protocolInfo[itemInfo.protocol] + "Item"} onClick={this.on}>
        <div className="itemInfoTop">
          <h3>{itemInfo.name}</h3>
          <p className={"protocol " + protocolInfo[itemInfo.protocol]}>{protocolInfo[itemInfo.protocol]}</p>
        </div>
        <div className="itemInfoBottom">
          <p className="simpleExample">{itemInfo.example}</p>
          <i className="simpleInfo">{itemInfo.info}</i>
        </div>

        <div className={"itemDetailInfo " + (on ? "activeDetailInfo" : "")}>
          <p>{detailInfo.info}</p>
        </div>
      </div>
    );
  }
}

export default ProtocolItem;