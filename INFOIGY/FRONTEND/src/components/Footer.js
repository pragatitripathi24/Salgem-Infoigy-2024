import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo/logobg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

import '../css/Footer.css'; // Ensure you import your CSS file for custom styles

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'linear-gradient(to bottom, rgb(1, 32, 47), rgb(0, 0, 0))' }}>
      <Container>
        <Row className="align-items-center text-center " style={{marginTop:"40px",marginBottom:"90px"}}>
          <Col size={12}>
            <img src={logo} alt="Logo" className="footer-logo" />
            <p>Connect with us</p>
            <div className="social-icon mt-3">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="#"><img src={navIcon4} alt="Icon" /></a>
              <a href="#"><img src={navIcon5} alt="Icon" /></a>
            </div>
            <p className="mt-4">© 2024 All Rights Reserved Infoigy Tech Pvt. Ltd.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
