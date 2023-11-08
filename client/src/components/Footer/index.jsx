import React from "react";
import { Container, Col } from "react-bootstrap";
import { FaEnvelope, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div className="footer bg-black">
        <div className="container">
        <Container className="d-flex  p-4 text-white">
  <Col md={4} className="d-flex justify-content-end p-2">
    <p>Contact:
    <a href="tel:443-771-1708" className="text-white mx-2">
      <FaPhone />
    </a>
    <a
      href="https://www.instagram.com/301southsessions/"
      className="text-white mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaEnvelope />
    </a>
    </p>
  </Col>

  <Col md={4} className="text-center p-2 ">
    <p className="pl-4">© 2023 301CATCHING</p>
 </Col>
 <Col md={4} className="d-flex text-white p-2">

  <p>Follow:</p>
    <a
      href="https://www.instagram.com/301southsessions/"
      className="text-white mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
 
    <a
      href="https://www.instagram.com/301southsessions/"
      className="text-white mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
  </Col>
</Container>
        </div>
        </div>
    );
}

export default Footer;
