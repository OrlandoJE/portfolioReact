import './BackToTop.css';
import { ArrowUpIcon } from '../../assets/TSXicons/ArrowUpIcon';

export const BackToTop = () => {
  return (
    <div
      className='backtotop'
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <ArrowUpIcon />
    </div>
  );
};
