import s from './User.module.css';
import userPhoto from '../../../media/images/user-default.jpg';
import {NavLink} from "react-router-dom";

export function User(props) {
  return (
    <div className={s.container}>
      <div className={s.wrap1}>
        <div className={s.avatar}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photos.small ? props.photos.small : userPhoto} alt="avatar"/>
          </NavLink>
        </div>
        <div>
          {
            props.followed ?
              <button disabled={props.followingInProgress.includes(props.id)} onClick={() => {
                props.unfollow(props.id);
              }}>Отписаться</button> :

              <button disabled={props.followingInProgress.includes(props.id)} onClick={() => {
                props.follow(props.id);
              }}>Подписаться</button>
          }
        </div>
      </div>
      <div className={s.wrap2}>
        <div className={s.wrap3}>
          <div><span className={s.title}>Имя:</span> {props.name}</div>
          <div><span className={s.title}>Статус:</span> {props.status}</div>
        </div>
      </div>
    </div>
  );
}
