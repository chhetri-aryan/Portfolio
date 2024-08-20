import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useState, useEffect } from 'react';
import { DiFsharp } from "react-icons/di";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from 'styled-components';

const Navbar = ({ toggleTheme }) => {

  const [enabled, setEnabled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0 || window.scrollY < 80);
        };

        window.addEventListener('scroll', handleScroll);
        
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  const handleThemeChange = () => {
    setEnabled(!enabled);
    toggleTheme();
  }

  const [isOpen, setIsOpen] = useState(false);
  var theme = useTheme();

  return (
    <Nav className='h-screen' theme={theme} isAtTop={isAtTop}>
      <NavbarContainer>
        <NavLogo to='/'>
          <div className='hover:animate-pulse' style={{ display: "flex", alignItems: "center", color: theme.primary, marginBottom: '20', cursor: 'pointer' }}>
            <DiFsharp size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>

          <MobileIcon>
            <div className='flex mt-6 mr-6' >
              <DarkModeToggle
                onChange={handleThemeChange}
                checked={!enabled}
                size={60}
                speed={2.5}
                className='me-2 -mt-0.5'
              />
              <FaBars onClick={() => {
                setIsOpen(!isOpen)
              }} />
            </div>
          </MobileIcon>


        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>

          <DarkModeToggle
            onChange={handleThemeChange}
            checked={!enabled}
            speed={2.5}
            size={70}
          />

        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>

            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>

            <GitHubButton style={{ background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>

    </Nav>
  )
}

export default Navbar