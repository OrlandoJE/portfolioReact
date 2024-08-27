import './Project.css';
import projectData from '../../project.json';
import { ProjectCard } from '../objectComponent/ProjectCard';

export const Project = () => {
  const slicedProjectData = [...projectData].reverse().slice(0, 6);
  return (
    <article className='project'>
      <h2>Projects and Contributions</h2>
      <div className='projectContainer'>
        {slicedProjectData.map((project) => (
          <ProjectCard
            type={project.type}
            title={project.title}
            description={project.description}
            image={project.image}
            imgTitle={project.imgTitle}
            techStack={project.techStack}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </article>
  );
};
