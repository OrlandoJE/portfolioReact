// Styles
import './Projects.css';
// Data
import projectsData from '../../projects.json';
// Components
import { Project } from '../objectComponent/Project';
import { Button } from '../objectComponent/Button';

export const Projects = () => {
  const slicedProjectsData = [...projectsData].reverse().slice(0, 3);
  return (
    <div className='projects'>
      <h2>Proyectos</h2>
      {slicedProjectsData.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          image={project.image}
          imgTitle={project.imgTitle}
          link={project.link}
        />
      ))}
      {projectsData.length > 3 && (
        <Button
          text='Ver Más...'
          class='secundary'
          click={() => {
            const dialog = document.querySelector(
              '.dialogProjectsPage'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        />
      )}
    </div>
  );
};
