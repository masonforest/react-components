import './Modal.scss';
import React, { Component } from 'react';
var _ = require('lodash');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false  };
  }

  toggle(){
		this.state.open = !this.state.open;
    this.setState(this.state);
  }
  render() {
    return (
      <div className={this.state.open ? '' : 'hidden'}>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
