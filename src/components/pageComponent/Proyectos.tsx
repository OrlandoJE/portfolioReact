// Styles
import './Proyectos.css';
//Data
import proyectosData from '../../proyectos.json';
// Components
import { Proyecto } from '../objectComponent/Proyecto';
import { Button } from '../objectComponent/Button';

export const Proyectos = () => {
  const slicedProyectosData = [...proyectosData].reverse().slice(0, 3);
  return (
    <div className='Proyectos'>
      <h2>Proyectos</h2>
      {slicedProyectosData.map((proyecto) => (
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
      ))}
      {proyectosData.length > 3 && (
        <Button
          text='Ver Más...'
          class='secundary'
          click={() => {
            const dialog = document.querySelector(
              '.dialogProyectosPage'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        />
      )}
    </div>
  );
};
