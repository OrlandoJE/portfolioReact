import { Link } from 'react-router-dom';
// Styles
import './NavBar.css';
// Components
import { HamburgerMenu } from '../objectComponent/HamburgerMenu';
// Icons
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';
import { LinkedInIcon } from '../../assets/TSXicons/LinkedInIcon';
import { DarkModeIcon } from '../../assets/TSXicons/DarkModeIcon';
import { OrlandoJimenez } from '../../assets/TSXicons/OrlandoJimenez';

export const NavBar = () => {
  return (
    <nav>
      <Link
        to={'/portfolio'}
        onClick={() => {
          const element = document.querySelector('.hero');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className='logo'
      >
        <OrlandoJimenez />
        Orlando
      </Link>
      <section className='navigation'>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.hero');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Home
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.experience');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Experience
        </Link>
        <Link
          to={'/portfolio'}
          onClick={() => {
            const element = document.querySelector('.project');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
        </Link>
      </section>

      <section className='social'>
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
      </section>

      <HamburgerMenu />
    </nav>
  );
};
