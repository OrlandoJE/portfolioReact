// Styles
import './ExperienceCard.css';
// Components
import { Button } from './Button';
import { TechStackDisplayer } from './TechStackDisplayer';

interface ExperienceProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imgTitle: string;
  link: string;
  techStack: string[];
}

export const ExperienceCard = (props: ExperienceProps) => {
  function imgSource(imagePath: string) {
    return new URL(`../../../public/Experience/${imagePath}`, import.meta.url)
      .href;
  }
  return (
    <div
      className={`experienceCard ${props.id % 2 === 0 && 'rightDesc'}`}
      id={props.id.toString()}
    >
      {props.id % 2 === 1 ? (
        <>  
          <img
            src={imgSource(props.image)}
            alt={props.imgTitle}
            className='leftImg'
          />
          <section
            className='desc'
            style={{ textAlign: 'left', alignItems: 'flex-start' }}
          >
            <h4>{props.subtitle}</h4>
            <h2>{props.title}</h2>
            <TechStackDisplayer techStack={props.techStack} />
            <p>{props.description}</p>
            <div className='buttons'>
              <Button
                class='primary'
                text='Visitar'
                visit={true}
                click={() => {
                  window.open(props.link, '_blank');
                }}
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <section
            className='desc'
            style={{ textAlign: 'right', alignItems: 'flex-end' }}
          >
            <h4>{props.subtitle}</h4>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className='buttons'>
              <Button
                class='primary'
                text='Visitar'
                visit={true}
                click={() => {
                  window.open(props.link, '_blank');
                }}
              />
            </div>
          </section>
          <img
            src={imgSource(props.image)}
            alt={props.imgTitle}
            className='rightImg'
          />
        </>
      )}
    </div>
  );
};
