import "./Proyectos.css";

import { Proyecto } from "./Proyecto";

export const Proyectos = () => {
  return (
    <div className="Proyectos" id="projects">
      <h2>Proyectos</h2>
      <Proyecto id={0} />
      <Proyecto id={1} />

    </div>
  );
};
