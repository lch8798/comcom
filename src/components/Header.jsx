import React, { Component } from 'react';
import './Header.css';

const Header = ({ userName }) =>
  <div className="Header">
    <h3 className="UserName">{ userName }</h3>
  </div>

export default Header;
