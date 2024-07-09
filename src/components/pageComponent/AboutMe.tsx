// Styles
import './AboutMe.css';
// Assets
import Laptop from '../../assets/Laptop.png';

export const AboutMe = () => {
  return (
    <div className='Acerca'>
      <img src={Laptop} alt='Laptop' />
      <div className='desc'>
        <h3>Acerca de Mí</h3>
        <h2>Orlando Jiménez</h2>
        <p>
          Apasionado por la música, el <b>diseño</b> y la <b>programación</b>.
          Me gusta estar constantemente aprendiendo. Me interesé por el{' '}
          <b>desarrollo web</b> por la oportunidad que brinda de diseñar{' '}
          <b>interfaces</b> y <b>experiencias de usuario</b>. Soy un estudiante
          que reside en Guadalajara, Jalisco.
        </p>
      </div>
    </div>
  );
};
