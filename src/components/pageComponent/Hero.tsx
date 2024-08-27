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
import CV from '/OrlandoJimenezCV.pdf';

export const Hero = () => {
  return (
    <header className='hero'>
      <article className='me'>
        <section className='desc'>
          <h1>Web Developer</h1>
          <p>
            Hi, I'm Orlando Jimenez. A Front-End web developer based in Jalisco,
            Mexico.
          </p>
          <div className='buttons'>
            <Button
              text={'Contact Me'}
              class={'primary'}
              click={() => {
                const dialog = document.querySelector(
                  '.dialogContact'
                ) as HTMLDialogElement;
                dialog?.showModal();
              }}
            />
            <button className='secondary'>
              <a href={CV} download={'CV Orlando Jimenez Web Developer'}>
                Download CV
              </a>
            </button>
          </div>
        </section>
        <img src={Orlando} alt='Orlando' />
      </article>

      <article className='tech'>
        <section className='techText'>
          <span>Tech Stack</span>
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
