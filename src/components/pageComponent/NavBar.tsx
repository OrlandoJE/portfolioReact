import { Link } from 'react-router-dom';
// Styles
import './NavBar.css';
// Components
import { HamburgerMenu } from '../objectComponent/HamburgerMenu';
// Icons
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';
import { LinkedInIcon } from '../../assets/TSXicons/LinkedInIcon';
import { DarkModeIcon } from '../../assets/TSXicons/DarkModeIcon';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link
        to={'/portfolio'}
        onClick={() => {
          const element = document.querySelector('.Hero');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className='logo'
      >
        Orlando
      </Link>
      <div className='navigation'>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.Hero');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Inicio
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.Acerca');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Acerca de mí
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.Proyectos');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Proyectos
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const dialog = document.querySelector(
              '.dialogContacto'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        >
          Contacto
        </Link>
      </div>

      <div className='social'>
        <Link to={'#'}>
          <DarkModeIcon />
        </Link>

        <Link to={'https://github.com/OrlandoJE'} target='_blank'>
          <GitHubIcon />
        </Link>

        <Link
          to={'https://www.linkedin.com/in/orlandojimenezesparza/'}
          target='_blank'
        >
          <LinkedInIcon />
        </Link>
      </div>

      <HamburgerMenu />
    </div>
  );
};
