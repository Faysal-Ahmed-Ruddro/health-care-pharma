import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <NavLink className="text-white" to="/contact">
              Contact
            </NavLink>
            {!user?.email ? <NavLink className="text-white" to="/login">
              {" "}
              Login
            </NavLink> :
            <button onClick={logOut} className="btn btn-primary">
              LogOut
            </button>}
          </Nav>
          <Navbar.Text className="text-white">
            Signed in as: {user?.displayName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
