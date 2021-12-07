import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../assets/logo.jpg";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/assessment1">
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/assessment1">Assessment1</Nav.Link>
            <Nav.Link href="/assessment2">Assessment2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
