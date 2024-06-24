import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Proyectos } from '../components/Proyectos';

export const Inicio = () => {
    return (
      <div>
        <Hero />
        <AboutMe />
        <Proyectos />
    </div>
  )
}