import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Molloy, Noam - Resume.pdf'
import NoamLogo from '../../assets/Noam-Logo.png'
export function Header() {
  
  
  
  return (
    <Container className="header">
      <HashLink smooth to="/#" className="logo">
        <img src={NoamLogo} alt="Noam Logo" className="logo-image" />
      </HashLink>
      <nav>
        <a href="/projects">Projects</a>
        <NavHashLink smooth to="#contact">
          Say Hello
        </NavHashLink>  
        <a href={Resume} className="button" target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
      {/* <div
      onClick={() => {
        setActive(!isActive)
      }}>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Open menu' : 'Close menu'}
          className={isActive ? 'menu active' : 'menu'}
          
        ></div>
      </div> */}
  </Container>
)
}
