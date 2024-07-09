// Styles
import './Project.css';
// Components
import { Button } from './Button';

interface ProjectProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imgTitle: string;
  link: string;
}

export const Project = (props: ProjectProps) => {
  return (
    <div
      className={`project ${props.id % 2 === 0 && 'rightDesc'}`}
      id={props.id.toString()}
    >
      {props.id % 2 === 1 ? (
        <>
          <img src={props.image} alt={props.imgTitle} className='leftImg' />
          <div
            className='desc'
            style={{ textAlign: 'left', alignItems: 'flex-start' }}
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
              {/* <Button
                class="secundary"
                text="Más..."
                visit={true}
                click={() => {}}
              /> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
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
              {/* <Button
                class="secundary"
                text="Más..."
                visit={true}
                click={() => {}}
              /> */}
            </div>
          </div>
          <img src={props.image} alt={props.imgTitle} className='rightImg' />
        </>
      )}
    </div>
  );
};
