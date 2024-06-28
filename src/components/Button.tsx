import './Button.css'

interface ButtonProps {
  text: string;
  class: "primary" | "secundary" | "tertiary";
  click: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button className={props.class} onClick={props.click}>{props.text}</button>;
};
