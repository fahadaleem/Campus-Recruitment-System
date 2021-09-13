import React,{useContext} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./stylesheets/NavbarStyles.css";
import {Link} from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalContext";

const StudentNavbar = () => {
const {handleLogout} = useContext(GlobalContext);
  return (
    <>
      <Navbar expand="md" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">CRM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links">
                  <Link to="/student" className="link-item">Home</Link>
              </Nav.Link>
              <Nav.Link className="links">
              <Link to="/student/profile" className="link-item">My Profile</Link>
              </Nav.Link>
              <Nav.Link className="links">
              <Link to="/student/jobs" className="link-item">Jobs</Link>
              </Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link  className="logout-btn" onClick={e=>{
                    e.preventDefault();
                    handleLogout();
                }}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default StudentNavbar;
