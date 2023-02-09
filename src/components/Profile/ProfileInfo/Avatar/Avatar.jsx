import s from './Avatar.module.css';

export function Avatar () {
  return (
    <div className={s.avatar}>
      <img src={'./иван.jpg'} alt="Изображение"/>
    </div>
  );
}