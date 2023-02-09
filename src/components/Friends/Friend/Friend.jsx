import s from "./Friend.module.css";

export function Friend(props) {
  return (
    <div className={s.friend}>
      <div className={s.avatar}><img src={props.img} alt="Изображение"/></div>
      <div className={s.name}>{props.name}</div>
    </div>
  );
}