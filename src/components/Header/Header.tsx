import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect, useRef } from 'react'
import Resume from '../../assets/Molloy, Noam - Resume.pdf'
import NoamLogo from '../../assets/Noam-Logo.png'
export function Header() {
  const menuRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);

  const handleChange = () => { 
    
    setChecked(!checked);
    
  };

  const leaveMenu = () => {
    setChecked(false);
  };

  useEffect(() => {
    document.body.style.overflow = checked ? 'hidden' : 'unset';
    window.scrollTo(0, 0);
  }, [checked]);
  
  
  return (
    <Container className="header">
      <HashLink smooth to="/#" className="logo">
        <img src={NoamLogo} alt="Noam Logo" className="logo-image" />
      </HashLink>
      <input type="checkbox" role="button" aria-label="Display the menu" className="menu" checked={checked} onChange={handleChange} ref={menuRef}></input>
      <nav>
        {/* <a href="#/projects" onClick={leaveMenu}>Projects</a> */}
        <NavHashLink smooth to="#projects" onClick={leaveMenu}>
          Projects
        </NavHashLink>  
        <NavHashLink smooth to="#contact" onClick={leaveMenu}>
          Say Hello
        </NavHashLink>  
        <a href={Resume} className="button" target="_blank" rel="noreferrer" onClick={leaveMenu}>
          Resume
        </a>
      </nav>
  </Container>
)
}
