import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export function Dialog (props) {
  return (
    <div className={s.dialog}>
      <div className={s.avatar}><img src={props.img} alt="Изображение"/></div>
      <div className={s.name}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    </div>
  );
}