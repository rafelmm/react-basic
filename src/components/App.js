import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Menu from './menu/Menu';
import Section from './section/Section';

import './App.css';

function Backup() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#about">Sobre mi</Nav.Link>
        <Nav.Link href="#contact">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  );
}

function App() {
  const menuItems = [
    {
      href: '#about',
      text:'Sobre mi'
    },
    {
      href: '#career',
      text:'Experiencia'
    },
    {
      href: '#contact',
      text:'Contacto'
    }
  ];
  return (
    <>
      <Menu fixed='top' menuItems={menuItems}/>
      <div className="welcome-container">
        <div className="welcome-message">Hola, ¿quieres conocerme?</div>
        <div className="welcome-name">RAFEL MORMENEO</div>
        <div className="welcome-title">DEVELOPER</div>
      </div>
      
      <div className="main-container">
        <Section id="about" title="Este soy yo">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
        </Section>
        <Section id="career" title="Mi experiencia">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
        </Section>
        <Section id="contact" title="Contacta conmigo">

        </Section>
      </div>
    </>
  );
}

export default App;
