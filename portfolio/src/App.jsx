import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ThemeProvider } from 'styled-components'
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import HeroSection from './Components/HeroSection/HeroSection';
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Project from './Components/Projects/Project.jsx';
import Footer from './Components/Footer/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // {toggleTheme}
  return (
    <>

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

        <Router>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
          <Body>
            <Wrapper>
           <HeroSection />
            <Skills />
            <Project />
            <Education darkMode={darkMode} />
            </Wrapper>
            <Contact />
            <Footer darkMode={darkMode} />
          </Body>
        </Router>
      </ThemeProvider>

    </>
  )
}

export default App
