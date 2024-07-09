// Styles
import './Dialog.css';
import './DialogProjects.css';
// Data
import proyectosData from '../../projects.json';
// Components
import { Project } from '../objectComponent/Project';

export const DialogProjectsPage = () => {
  return (
    <dialog className='dialogProjectsPage'>
      <button
        className='closeButton'
        onClick={() => {
          const dialog = document.querySelector(
            '.dialogProjectsPage'
          ) as HTMLDialogElement;
          dialog?.close();
        }}
      >
        X
      </button>
      <div className='projectsPage'>
        <h2>Proyectos</h2>
        {proyectosData
          .map((proyecto) => (
            <Project
              key={proyecto.id}
              id={proyecto.id}
              title={proyecto.title}
              subtitle={proyecto.subtitle}
              description={proyecto.description}
              image={proyecto.image}
              imgTitle={proyecto.imgTitle}
              link={proyecto.link}
            />
          ))
          .reverse()}
      </div>
    </dialog>
  );
};
