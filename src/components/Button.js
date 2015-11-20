import './Button.scss';
import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    var styles = {};
    styles.borderColor = this.props.borderColor;
    return (
      <button class="button" onClick={this.props.onClick} style={styles.notification}>
        {this.props.title}
      </button>);
  }
}

export default Button;
