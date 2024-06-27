import "./Proyectos.css";

import { Proyecto } from "./Proyecto";
import proyectosData from '../proyectos.json'


export const Proyectos = () => {
  return (
    <div className="Proyectos" id="projects">
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
        />
      ))}
    </div>
  );
};
