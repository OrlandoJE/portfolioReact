import './TechStackDisplayer.css'

export const TechStackDisplayer = (props: { techStack: string[] }) => {
  return (
    <div className='techStackContainer'>
      {props.techStack.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  );
};
