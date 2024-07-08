import './Button.css';
import { LinkIcon } from '../../assets/TSXicons/LinkIcon';

interface ButtonProps {
  text: string;
  class: 'primary' | 'secundary' | 'tertiary';
  click?: () => void;
  visit?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.class} ${props.visit ? 'visit' : ''}`}
      onClick={props.click}
    >
      {props.text}
      {props.class === 'primary' && props.visit && <LinkIcon />}
    </button>
  );
};
