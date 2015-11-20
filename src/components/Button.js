import React, { Component } from 'react';
var _ = require('lodash');


class Button extends React.Component {
  render() {
    var styles = _.cloneDeep(this.constructor.styles);
    styles.notification.backgroundColor = this.props.color;
    return (
      <button style={styles.notification}>
        {this.props.title}
      </button>);
  }
}
Button.styles = {
  notification: {
    border: "5px solid green",
    padding: 10,
    color: "#333"
  }
};

export default Button;
