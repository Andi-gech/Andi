import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";


import React, { useState } from "react";

import "./app.css";
import { Link } from "react-scroll";



function Navbars({ onPres }) {
  const [active, setactive] = useState("home");
  const [visible, setvisible] = useState(false);
 
  const onpress = () => {
    const s = !visible;
    setvisible(s);
  };

  const onUpdateActiveLink = (name) => {
    setactive(name);
  };
  return (
    <div>
      <Navbar className="navbar" id='home' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={""} alt="Andi.com" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-icon-toogl" onClick={onpress}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
              
              <Nav.Link
                href="#home"
                className={active === "home" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("home")}
              >
             <Link to="home" spy={true} smooth={true} offset={0} duration={200} style={{color:"white",textDecoration:"none"}}> Home</Link>
               
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={active === "Profiles" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Profiles")}
              >
                <Link to="profiles" spy={true} smooth={true} offset={0} duration={500}> Profile</Link>
               
              </Nav.Link>
              <Nav.Link
                href="#sd"
                className={active === "Skills" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Skills")}
              >  <Link to="skill" spy={true} smooth={true} offset={-20} duration={200}>skill</Link>
               
              </Nav.Link>
              <Nav.Link
                href="#sd"
                className={active === "Projects" ? "bun-active" : "bun"}
                onClick={() => onUpdateActiveLink("Projects")}
              >
               <Link to="projects" spy={true} smooth={true} offset={-10} duration={200}>Projects</Link>
               
              </Nav.Link>
            </Nav>

            <button onClick={onpress}>Contact-Me </button>
          </Navbar.Collapse>
        </Container>
        {visible ? (
          <div className="popup">
            <div className="i11">
              <a href="https://www.facebook.com/anduti724">
                <FaFacebook
                  size={40}
                  color="
white"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://www.instagram.com/anduti724/">
                <FaInstagram
                  size={40}
                  color="
white"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://github.com/Andi-gech">
                <FaGithub
                  size={40}
                  color="
white"
                />
              </a>
            </div>
            <div className="i11">
              <a href="https://www.tiktok.com/@andutii1">
                <FaTiktok
                  size={40}
                  color="
white"
                />
              </a>
            </div>
            <div className="i11">
              <a href="ddd">
                <FaLinkedin
                  size={40}
                  color="
white"
                />
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Navbar>
    </div>
  );
}

export default Navbars;
