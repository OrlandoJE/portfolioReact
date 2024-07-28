import './ProjectCard.css';
import { Link } from 'react-router-dom';
import { TechStackDisplayer } from './TechStackDisplayer';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  imgTitle: string;
  link: string;
  techStack: string[];
}

export const ProjectCard = (props: ProjectProps) => {
  function imgSource(imagePath: string) {
    return new URL(`../../../public/Projects/${imagePath}`, import.meta.url)
      .href;
  }
  return (
    <Link to={props.link} className='projectCard' target='_blank'>
      <img src={imgSource(props.image)} alt={props.imgTitle} />
      <div className='techStack desc'>
        <div className='techStackContainer'>
          <TechStackDisplayer techStack={props.techStack} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};
