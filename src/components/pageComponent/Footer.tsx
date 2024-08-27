import { Link } from 'react-router-dom';
// Styles
import './Footer.css';
// Icons
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';
// import { LinkedInIcon } from '../../assets/TSXicons/LinkedInIcon';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link
        className='githubCode'
        to={'https://github.com/OrlandoJE/portfolioReact'}
        target='_blank'
      >
        <GitHubIcon />
        Source Code on GitHub
      </Link>
    </footer>
  );
};
