import './App.scss';
import React, { Component } from 'react';
import Button from './Button';
import Modal from './Modal';

export default class App extends React.Component {
  constructor() {
    super();
  }
  openModal(){
    this._modal.toggle();
  }

  render() {
    return(
      <div>
        <h1>React Components</h1>
        <h2>Button</h2>
        <Button title="Button" borderColor="red" />
        <h2>Modal</h2>
        <Button onClick={this.openModal.bind(this)} title="Toggle Modal"/>
        <Modal title="Modal Title" ref={(c) => this._modal = c}>
          Modal Content
        </Modal>
      </div>
  );
  }
}
