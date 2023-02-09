import s from './Title.module.css';

export function Title() {
  return (
    <div className={s.title}>
      <a href="#"><h3>Friends</h3></a>
    </div>
  );
}