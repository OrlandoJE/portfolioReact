import './Button.css'

interface ButtonProps {
  text: string;
  class: "primary" | "secundary" | "tertiary";
}

export const Button = (props: ButtonProps) => {
  return <button className={props.class}>{props.text}</button>;
};
