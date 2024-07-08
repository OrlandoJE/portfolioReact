// Page Components
import { Hero } from '../components/pageComponent/Hero';
import { AboutMe } from '../components/pageComponent/AboutMe';
import { Proyectos } from '../components/pageComponent/Proyectos';
import { BackToTop } from '../components/objectComponent/BackToTop';

export const Inicio = () => {
  return (
    <div>
      <BackToTop />
      <Hero />
      <AboutMe />
      <Proyectos />
    </div>
  );
};
