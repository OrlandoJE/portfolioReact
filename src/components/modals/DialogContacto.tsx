import './Dialog.css';
import './DialogContacto.css';

// Icons
import { MailIcon } from '../../assets/TSXicons/MailIcon';
import { LocationIcon } from '../../assets/TSXicons/LocationIcon';

const clickMail = () => {
  // Implementation to send mail
  window.location.href = `mailto:orlandoesparza6@outlook.com`;
};

export const DialogContacto = () => {
  return (
    <dialog className='dialogContacto'>
      <button
        className='closeButton'
        onClick={() => {
          const dialog = document.querySelector(
            '.dialogContacto'
          ) as HTMLDialogElement;
          dialog?.close();
        }}
      >
        X
      </button>
      <div className='Contacto'>
        <h2>Contáctame</h2>
        <div className='contactMethods'>
          <div
            className='contactMethod location'
            onClick={() => {
              window.open(
                'https://maps.app.goo.gl/VwnNthmA5rd8kho48',
                '_blank'
              );
            }}
          >
            <LocationIcon />
            <div className='locationText'>
              <h4>Ubicación</h4>
              <span>Guadalajara, Jalisco</span>
            </div>
          </div>
          <div
            className='contactMethod mail'
            onClick={() => {
              clickMail();
            }}
          >
            <MailIcon />
            <div className='mailText'>
              <h4>Email</h4>
              <span>orlandoesparza6@outlook.com</span>
            </div>
          </div>
        </div>
        {/* <div className='divisor'>
          <div className='line'></div>
          <h4>Ó</h4>
          <div className='line'></div>
        </div>
        <form method='dialog' onSubmit={}>
          <label>
            Nombre:
            <input type='text' name='name' />
          </label>
          <label>
            Correo:
            <input type='email' name='email' />
          </label>
          <label>
            Teléfono:
            <input type='tel' name='phone' />
          </label>
          <label>
            Mensaje:
            <textarea name='message'></textarea>
          </label>
          <button type='submit' className='primary'>
            Enviar
          </button>
        </form> */}
      </div>
    </dialog>
  );
};
