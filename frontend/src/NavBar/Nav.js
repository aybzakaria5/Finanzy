import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Nav.module.css';
import logo from "./finlogo-transformed.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import video from "./cars.mp4";

function OffcanvasExample() {
  const expand = 'lg';

  return (
    <div className={Style.videoBackground}>
      <video autoPlay muted loop className={Style.video}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar expand={expand} className={`p-4 ${Style.Nav}`}>
        <Container fluid>
          <Navbar.Brand href="#" className={Style.logo}>
            <img src={logo} alt="" className={Style.logo_image} />
          </Navbar.Brand>

          <Navbar.Toggle className={Style.Toggle} aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className={Style.Nav}
          >
            <Offcanvas.Header closeButton className={Style.Toggle_close}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Finazy
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="#action1" className={Style.Link}>Home</Nav.Link>
                <Nav.Link href="#action2" className={Style.Link}>About</Nav.Link>
                <Nav.Link href="#action1" className={Style.Link}>Testimonials</Nav.Link>
                <Nav.Link href="#action2" className={Style.Link}>Contact us</Nav.Link>
              </Nav>
              <Form className={`d-flex ${Style.Search}`}>
                <Button variant="outline-success" className={Style.Btn_Search}>Sign in</Button>
                <Button variant="outline-success" className={Style.Btn_Search}>Sign up</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default OffcanvasExample;
