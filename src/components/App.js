import React, { Component } from 'react';
import Button from './Button';
import Modal from './Modal';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>React Components</h1>
        <h2>Button</h2>
        <Button title="Button" borderColor="red" />
        <h2>Modal</h2>
        <Modal title="Modal Title">
          Modal Content
        </Modal>
      </div>
  );
  }
}
