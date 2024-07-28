// Styles
import './ExperiencePage.css';
// Data
import experiencesData from '../experience.json';
// Components
import { ExperienceCard } from '../components/objectComponent/ExperienceCard';

export const ExperiencePage = () => {
  return (
    <article className='experiencePage'>
      <h2>Proyectos</h2>
      {experiencesData
        .map((experience) => (
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
        ))
        .reverse()}
    </article>
  );
};
