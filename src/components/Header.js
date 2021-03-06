import React from "react";
import {
  Navbar,
  Nav,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { createBrowserHistory } from "history";

import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  
  HashRouter,
} from "react-router-dom";

function Header() {
  //   var navbarCSS = document.getElementById("#header");
  //   window.onscroll = function() {
  //     if (window.screenTop > 0) {
  //         alert("Working");
  //         navbarCSS.style.boxShadow = "0px 1px 10px #999";
  //         // navbarCSS.classList.addClass("navbarFloat");
  //     } else {
  //         // document.getElementsByClassName("header");
  //         navbarCSS.style.boxShadow = "0px 0px 0px #999";
  //         // navbarCSS.removeClass("navbarFloat");
  //     }
  // };

  return (
    <HashRouter
      basename={process.env.PUBLIC_URL}
      history={createBrowserHistory()}
    >
      <Row>
        <Col sm={12}>
          <div className="header">
            <Navbar variant="dark" expand="lg" collapseOnSelect fixed="top">
              <Container fluid="md">
                <Navbar.Brand href="/">SCH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="/#/blog">Blogs</Nav.Link>
                    <Nav.Link href="/#/projects">Projects</Nav.Link>
                    <Nav.Link href="/#/announcements">Announcements</Nav.Link>
                    <Nav.Link href="/#/talks">Talks</Nav.Link>
                    <Nav.Link href="/#/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
    </HashRouter>
  );
}

export default Header;
