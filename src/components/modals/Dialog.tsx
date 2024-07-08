import './Dialog.css';
import { ProyectosPage } from './ProyectosPage';
import { Tecnologias } from './Tecnologias';
import { Contacto } from './Contacto';

interface dialogProps {
  dialogContent: string | null;
}

export const Dialog = (props: dialogProps) => {
  return (
    <dialog>
      <button
        className='closeButton'
        onClick={() => {
          const dialog = document.querySelector('dialog') as HTMLDialogElement;
          dialog?.close();
        }}
      >
        X
      </button>
      {props.dialogContent === 'Proyectos' && <ProyectosPage />}
      {props.dialogContent === 'Tecnologias' && <Tecnologias />}
      {props.dialogContent === 'Contacto' && <Contacto />}
    </dialog>
  );
};
