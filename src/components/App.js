import React, {useState, useEffect} from 'react';
import {Element} from 'react-scroll';
import Menu from './menu/Menu';
import Section from './section/Section';

import './App.css';

function App() {
  const menuItems = [
    {
      target: 'about',
      text:'Sobre mi'
    },
    {
      target: 'career',
      text:'Experiencia'
    },
    {
      target: 'contact',
      text:'Contacto'
    }
  ];
  const [menuActive, setMenuActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function handleScroll (event){
    if ( window.scrollY > 10 && Math.abs(scrollY - window.scrollY)>10 ){
      setMenuActive(false);
    }
    setScrollY(window.scrollY);
  }

  function handleMenuClick(){
    console.log(menuActive);
    setMenuActive(!menuActive);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      <Menu menuItems={menuItems} menuActive={menuActive} onMenuClick={handleMenuClick}/>
      <div className="welcome-container">
        <div className="welcome-message">Hola, ¿quieres conocerme?</div>
        <div className="welcome-name">RAFEL MORMENEO</div>
        <div className="welcome-title">DEVELOPER</div>
      </div>
      
      <div className="main-container">
        <Element name="about">
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
        </Element>
        <Element name="career">
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
        </Element>
        <Element name="contact">
          <Section id="contact" title="Contacta conmigo">

          </Section>
        </Element>
      </div>
    </>
  );
}

export default App;
