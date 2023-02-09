import s from './Data.module.css';

export function Data (props) {
  return (
    <div className={s.data}>
      <p>{props.name}</p>
      <p>{`Дата рождения: ${props.dateOfBirth}`}</p>
      <p>{`Место работы: ${props.job}`}</p>
      <p>{`Город: ${props.city}`}</p>
      <p>{`Язык: ${props.language}`}</p>
    </div>
  );
}