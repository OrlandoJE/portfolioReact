import "./ButtonVisit.css";

interface ButtonProps {
  text: string;
  class: "primary" | "secundary" | "tertiary";
  click?: () => void;
}

export const ButtonVisit = (props: ButtonProps) => {
  return (
    <button className={`ButtonVisit ${props.class}`} onClick={props.click}>
      <span>{props.text}</span>
      {props.class === "primary" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M14.1248 6.13343L14.1248 13.2045M14.1248 6.13343L7.05372 6.13343M14.1248 6.13343L5.87521 14.383"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
};
