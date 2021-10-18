import React from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink  } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Health Care Pharma
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto navlink">
              <NavLink className="text-white" to="/home">
                Home
              </NavLink>
              <NavLink className="text-white" to="/team">
                Our Team
              </NavLink>
              <NavLink className="text-white" to="/about">
                About
              </NavLink>
              <NavLink className="text-white" to="/contact">Contact</NavLink>
              <NavLink className="text-white" to="/login"> Login</NavLink>
            </Nav>
            <Navbar.Text className="text-white">
              Signed in as:
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;