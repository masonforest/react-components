import './Modal.scss';
import React, { Component } from 'react';
var _ = require('lodash');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false  };
  }

  close(){
    this.setState({"open": false});
  }

  toggle(){
    this.setState({"open": !this.state.open});
  }
  render() {
    return (
      <div className={this.state.open ? '' : 'hidden'}>
        <div onClick={this.close.bind(this)}>X</div>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
