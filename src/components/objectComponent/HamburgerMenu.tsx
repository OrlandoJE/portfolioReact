import { Link } from 'react-router-dom';
import { useState } from 'react';
// Styles
import './HamburgerMenu.css';
// Icons
import { DarkModeIcon } from '../../assets/TSXicons/DarModeIcon';
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';
import { LinkedInIcon } from '../../assets/TSXicons/LinkedInIcon';

export const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`hamburger ${isActive ? 'change' : ''}`}
        onClick={toggleMenu}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>

      <div className={`menu ${isActive ? 'active' : ''}`}>
        <a href='#' onClick={toggleMenu}>
          Inicio
        </a>
        <a href='#about' onClick={toggleMenu}>
          Acerca de mí
        </a>
        <a href='#projects' onClick={toggleMenu}>
          Trayectoria
        </a>
        <a href='#contact' onClick={toggleMenu} className='contacto'>
          Contacto
        </a>

        <Link
          to={'#'}
          onClick={() => {
            if (document.body.classList.contains('force-light-mode')) {
              document.body.classList.remove('force-light-mode');
              document.body.classList.add('force-dark-mode');
            } else if (document.body.classList.contains('force-dark-mode')) {
              document.body.classList.remove('force-dark-mode');
              document.body.classList.add('force-light-mode');
            } else {
              document.body.classList.add('force-light-mode');
            }
          }}
        >
          <DarkModeIcon />
          <span> Switch Theme</span>
        </Link>

        <Link to={'https://github.com/OrlandoJE'} target='_blank'>
          <GitHubIcon />
          <span> GitHub</span>
        </Link>

        <Link
          to={'https://www.linkedin.com/in/orlandojimenezesparza/'}
          target='_blank'
        >
          <LinkedInIcon />
          <span> LinkedIn</span>
        </Link>
      </div>
    </>
  );
};
