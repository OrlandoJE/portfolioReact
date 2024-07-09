// Styles
import './Dialog.css';
import './DialogProyectos.css';
// Data
import proyectosData from '../../proyectos.json';
// Components
import { Proyecto } from '../objectComponent/Proyecto';

export const DialogProyectosPage = () => {
  return (
    <dialog className='dialogProyectosPage'>
      <button
        className='closeButton'
        onClick={() => {
          const dialog = document.querySelector(
            '.dialogProyectosPage'
          ) as HTMLDialogElement;
          dialog?.close();
        }}
      >
        X
      </button>
      <div className='ProyectosPage'>
        <h2>Proyectos</h2>
        {proyectosData.map((proyecto) => (
          <Proyecto
            key={proyecto.id || 'Error'}
            id={proyecto.id || 1}
            title={proyecto.title || 'Error'}
            subtitle={proyecto.subtitle || 'Error'}
            description={proyecto.description || 'Error'}
            image={proyecto.image || 'Error'}
            imgTitle={proyecto.imgTitle || 'Error'}
            link={proyecto.link || 'Error'}
          />
        )).reverse()}
      </div>
    </dialog>
  );
};
