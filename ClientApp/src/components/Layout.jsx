import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import { NavMenu } from './NavMenu/index';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
