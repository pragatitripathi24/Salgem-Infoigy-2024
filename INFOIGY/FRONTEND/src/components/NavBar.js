import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import infoigylogo from '../assets/logo/infoigy-logo.png';
import React from 'react';
import '../css/NavBar.css'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveLink('home');
    } else if (currentPath === '/about') {
      setActiveLink('about');
    } else if (currentPath === '/services') {
      setActiveLink('services');
    } else if (currentPath === '/portfolio') {
      setActiveLink('portfolio');
    } else if (currentPath === '/career') {
      setActiveLink('career');
    } else if (currentPath === '/contact') {
      setActiveLink('contact');
    }
  }, [location.pathname]);

  return (
    <Navbar expand="md" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={infoigylogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className={`navbar-link ${activeLink === 'services' ? 'active' : ''}`}>Services</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/career" className={`navbar-link ${activeLink === 'career' ? 'active' : ''}`}>Careers</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
