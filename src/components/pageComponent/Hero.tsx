// Styles
import './Hero.css';
// Assets
import Orlando from '../../assets/Orlando.webp';
// Icons
import Figma from '../../assets/TechIcons/iconFigma.svg';
import HTML5 from '../../assets/TechIcons/iconHTML5.svg';
import CSS from '../../assets/TechIcons/iconCSS.svg';
import JS from '../../assets/TechIcons/iconJS.svg';
import React from '../../assets/TechIcons/iconReact.svg';
import TS from '../../assets/TechIcons/iconTS.svg';
import TailWindCSS from '../../assets/TechIcons/iconTailWindCSS.svg';
// Components
import { Button } from '../objectComponent/Button';

export const Hero = () => {
  return (
    <header className='hero'>
      <article className='me'>
        <section className='desc'>
          <h1>Desarrollador Web</h1>
          <p>
            Hola, soy Orlando Jiménez. Un desarrollador Front-End que reside en
            Jalisco, México.
          </p>
          <div className='buttons'>
            <Button
              text={'Contáctame'}
              class={'primary'}
              click={() => {
                const dialog = document.querySelector(
                  '.dialogContact'
                ) as HTMLDialogElement;
                dialog?.showModal();
              }}
            />
            <Button
              text={'Experiencia'}
              class={'secundary'}
              click={() => {
                document
                  .querySelector('.experience')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </section>
        <img src={Orlando} alt='Orlando' />
      </article>

      <article className='tech'>
        <section className='techText'>
          <span>Tecnologías</span>
          <div className='verticalLine'></div>
        </section>

        <section className='techs'>
          <img src={Figma} alt='Figma' title='Figma' />
          <img src={HTML5} alt='HTML5' title='HTML5' />
          <img src={CSS} alt='CSS' title='CSS' />
          <img src={JS} alt='JavaScript' title='JavaScript' />
          <img src={React} alt='React' title='React' />
          <img src={TS} alt='TypeScript' title='TypeScript' />
          <img src={TailWindCSS} alt='TailWindCSS' title='TailWindCSS' />
        </section>
      </article>
    </header>
  );
};
