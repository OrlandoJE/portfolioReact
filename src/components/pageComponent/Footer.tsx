import { Link } from 'react-router-dom';
// Styles
import './Footer.css';
// Icons
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';
import { LinkedInIcon } from '../../assets/TSXicons/LinkedInIcon';

export const Footer = () => {
  return (
    <div className='footer'>
      <span>Copyright © 2024. All rights are reserved</span>
      <div className='socialLinks'>
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
    </div>
  );
};
