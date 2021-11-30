import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import styles from './styles.module.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom shadow-sm mb-3"
          expand="xxl"
        >
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand>CryptBD2App - Grupo Gamma</Navbar.Brand>
            </Link>
            <Navbar.Toggle className="mr-2" />
            <Navbar.Collapse className="d-sm-inline-flex flex-sm-row-reverse">
              <Nav.Item>
                <Link href="/" passHref>
                  <Nav.Link className="text-dark">Home</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/counter" passHref>
                  <Nav.Link className="text-dark">Counter</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/fetch-data" passHref>
                  <Nav.Link className="text-dark">Fetch data</Nav.Link>
                </Link>
              </Nav.Item>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
