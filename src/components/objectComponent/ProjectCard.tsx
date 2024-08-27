import './ProjectCard.css';
import { Link } from 'react-router-dom';
import { TechStackDisplayer } from './TechStackDisplayer';
import { LinkIcon } from '../../assets/TSXicons/LinkIcon';
import { GitHubIcon } from '../../assets/TSXicons/GitHubIcon';

interface ProjectProps {
  title: string;
  type: string;
  description: string;
  image: string;
  imgTitle: string;
  link: string;
  sourceCode: string;
  techStack: string[];
}

export const ProjectCard = (props: ProjectProps) => {
  function imgSource(imagePath: string) {
    return new URL(`../../../public/Projects/${imagePath}`, import.meta.url)
      .href;
  }
  return (
    <div className='projectCard'>
      <img src={imgSource(props.image)} alt={props.imgTitle} />
      <div className='techStack desc'>
        <div className='techStackContainer'>
          <TechStackDisplayer techStack={props.techStack} />
        </div>
        <Link to={props.link} target='_blank'>
          <h3>
            {props.title}
            <LinkIcon />
          </h3>
        </Link>
        <p>{props.description}</p>
        <Link to={props.sourceCode} target='_blank'>
          <span> - {props.type}</span>
          <div className='githubCode'>
            <span>Code</span>
            <GitHubIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
