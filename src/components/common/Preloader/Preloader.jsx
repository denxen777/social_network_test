import preloader from '../../../media/images/preloader.svg';
import s from './Preloader.module.css'

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="gif"/>
    </div>
  );
}
