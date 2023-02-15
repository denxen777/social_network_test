import s from './UserData.module.css';

export function UserData(props) {
  return (
    <div className={s.userData}>
      <div className={s.avatar}>
        <img src={props.user.img} alt="Изображение"/>
      </div>
      <div className={s.data}>
        <p>{props.user.name}</p>
        <p>{`Дата рождения: ${props.user.dateOfBirth}`}</p>
        <p>{`Место работы: ${props.user.job}`}</p>
        <p>{`Город: ${props.user.city}`}</p>
        <p>{`Язык: ${props.user.language}`}</p>
      </div>
    </div>
  );
}