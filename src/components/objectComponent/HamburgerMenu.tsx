import { Link } from 'react-router-dom';
import { useState } from 'react';
// Styles
import './HamburgerMenu.css';
// Icons
import { DarkModeIcon } from '../../assets/TSXicons/DarkModeIcon';
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
        <Link
          to={'/portfolio'}
          onClick={() => {
            setIsActive(!isActive);
            const element = document.querySelector('.hero');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Inicio
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            setIsActive(!isActive);
            const element = document.querySelector('.aboutMe');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Acerca de mí
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            setIsActive(!isActive);
            const element = document.querySelector('.projects');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Proyectos
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            setIsActive(!isActive);
            const dialog = document.querySelector(
              '.dialogContact'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        >
          Contacto
        </Link>

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

        <Link
          to={'https://github.com/OrlandoJE'}
          target='_blank'
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <GitHubIcon />
          <span> GitHub</span>
        </Link>

        <Link
          to={'https://www.linkedin.com/in/orlandojimenezesparza/'}
          target='_blank'
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <LinkedInIcon />
          <span> LinkedIn</span>
        </Link>
      </div>
    </>
  );
};
