import s from './Post.module.css';

export function Post (props) {
  return (
    <div className={s.post}>
      <div className={s.user}>
        <img src={'./иван.jpg'} alt="Пользователь"/>
      </div>
      <div className={s.message}>
        {props.message}
      </div>
    </div>
  );
}
