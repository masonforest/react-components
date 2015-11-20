import React, { Component } from 'react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="hidden">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
