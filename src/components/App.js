import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">Sobre mi</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="welcome-container">
        <div className="welcome-message">Hola, ¿quieres conocerme?</div>
        <div className="welcome-name">RAFEL MORMENEO</div>
        <div className="welcome-title">DEVELOPER</div>
      </div>
      
      <div className="main-container">
        <div id="about" className="section">
          <h1>Este soy yo</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum 
          </p>
        </div>
        <div id="contact" className="section">
          <h1>Este soy yo</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum 
          </p>
        </div>
      </div>
     
    </>
  );
}

export default App;
