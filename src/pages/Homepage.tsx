// Page Components
import { Hero } from '../components/pageComponent/Hero';
import { Experience } from '../components/pageComponent/Experience';
import { BackToTop } from '../components/objectComponent/BackToTop';
import { Project } from '../components/pageComponent/Project';

export const Homepage = () => {
  return (
    <main>
      <BackToTop />
      <Hero />
      <Experience />
      <Project />
    </main>
  );
};
