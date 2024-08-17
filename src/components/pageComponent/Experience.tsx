// Styles
import './Experience.css';
// Data
import experienceData from '../../experience.json';
// Components
import { ExperienceCard } from '../objectComponent/ExperienceCard';
import { Button } from '../objectComponent/Button';

export const Experience = () => {
  const slicedExperienceData = [...experienceData].reverse().slice(0, 3);
  return (
    <article className='experience'>
      <h2>Experience</h2>
      {slicedExperienceData.map((experience) => (
        <ExperienceCard
          key={experience.id}
          id={experience.id}
          title={experience.title}
          subtitle={experience.subtitle}
          description={experience.description}
          image={experience.image}
          imgTitle={experience.imgTitle}
          link={experience.link}
          techStack={experience.techStack}
        />
      ))}
      {experienceData.length > 3 && (
        <Button
          text='Ver Más...'
          class='secundary'
          click={() => {
            const dialog = document.querySelector(
              '.dialogProjectsPage'
            ) as HTMLDialogElement;
            dialog?.showModal();
          }}
        />
      )}
    </article>
  );
};
