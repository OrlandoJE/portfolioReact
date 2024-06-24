import './Hero.css'

import Orlando from '../assets/Orlando.jpg'
import Figma from '../assets/iconFigma.svg'
import HTML5 from '../assets/iconHTML5.svg'
import CSS from '../assets/iconCSS.svg'
import JS from '../assets/iconJS.svg'
import React from '../assets/iconReact.svg'
import TailWindCSS from '../assets/iconTailWindCSS.svg'

import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="yo">
        <div className="desc">
          <h1>Desarrollador Front-End</h1>
          <p>
            Hola, soy Orlando Jiménez. Un desarrollador Front-End que reside en
            Jalisco, México.
          </p>
          <div className="botones">
            <Button text={"Contáctame"} class={"primary"} />
            <Button text={"Experiencia"} class={"secundary"} />
          </div>
        </div>
        <img src={Orlando} alt="Orlando" />
      </div>

      <div className="tech">
        <div className="techText">
          <span>Tecnologías</span>
          <div className="verticalLine"></div>
        </div>

        <div className="techs">
          <img src={Figma} alt="Figma" />
          <img src={HTML5} alt="HTML5" />
          <img src={CSS} alt="CSS" />
          <img src={JS} alt="JS" />
          <img src={React} alt="React" />
          <img src={TailWindCSS} alt="TailWindCSS" />

          <Button text='Ver Más' class='tertiary' />
        </div>
      </div>
    </div>
  );
};
