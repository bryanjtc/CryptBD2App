import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';

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
            <Navbar.Brand as={Link} to="/">CryptBD2App - Grupo Gamma</Navbar.Brand>
            <Navbar.Toggle onClick={this.toggleNavbar} className="mr-2" />
            <Navbar.Collapse className="d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow">
                <Nav.Item>
                  <Nav.Link as={Link} className="text-dark" to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} className="text-dark" to="/counter">
                    Counter
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} className="text-dark" to="/fetch-data">
                    Fetch data
                  </Nav.Link>
                </Nav.Item>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
