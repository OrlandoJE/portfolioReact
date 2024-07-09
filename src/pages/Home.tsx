// Page Components
import { Hero } from '../components/pageComponent/Hero';
import { AboutMe } from '../components/pageComponent/AboutMe';
import { Projects } from '../components/pageComponent/Projects';
import { BackToTop } from '../components/objectComponent/BackToTop';

export const Home = () => {
  return (
    <div>
      <BackToTop />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
};
