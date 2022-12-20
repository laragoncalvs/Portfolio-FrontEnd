import React, { useState } from 'react';
import './App.scss';
import Header from './components/shared/Header';
import { Container, LargerContainer } from './components/styled/GlobalStyles';
import data from './assets/data.json'
import InicialBanner from './components/sections/InicialBanner';

import img from "./assets/Group 37.svg";
import imgDark from "./assets/Group 39.svg";
import FlipCard from './components/sections/about-me/FlipCard';
import Skills from './components/sections/Skills';
import TimeLine from './components/sections/about-me/TimeLine';
import Slider from './components/sections/about-me/Slider';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/shared/Footer';

const App = () => {
  const [themeBool, setThemeBool] = useState(true)
  const [theme, setTheme] = useState('app-light')
  const [lang, setLang] = useState(data.pt)


  function handleLangEn(){
    setLang(data.en)
  }

  function handleLangPt(){
    setLang(data.pt)
  }
 

  function handleDark(){
    setTheme('app-dark')
    setThemeBool(false)

  }

  function handleLight(){
    setTheme('app-light')
    setThemeBool(true)
  }

  return (
    <div className={`app ${theme} `}>
      
      <LargerContainer>
        <div className={`nav-position ${theme}`}>

      <Header 
        handleDark={handleDark} 
        handleLight={handleLight} 
        color={themeBool ? '#555' : '#fff'} 
        data={lang}
        handleLangPt={handleLangPt}
        handleLangEn={handleLangEn}
        />
        </div>
      </LargerContainer>

      <Container>
        <InicialBanner
        data={lang}
        img= { themeBool ? img : imgDark}
        />
      {/* </Container>

        <Skills/>

        <Container> */}
          <Slider/>
          </Container>

        <Skills/>

        <Container>
        </Container>

          <Portfolio/>
        <Container>
          <Contact/>
        </Container>

        <Footer/>
    </div>
  );
}

export default App;
