import s from './User.module.css';
import userPhoto from '../../../media/images/user-default.jpg';
import {NavLink} from "react-router-dom";
import {setFollow, setUnfollow} from "../../../api/api";

export function User(props) {
  return (
    <div className={s.container}>
      <div className={s.wrap1}>
        <div className={s.avatar}>
          <NavLink to={'../profile/' + props.id}>
            <img src={props.photos.small !== null ? props.photos.small : userPhoto} alt="avatar"/>
          </NavLink>
        </div>
        <div>
          {
            props.followed ?
              <button onClick={() => {
                setUnfollow(props.id).then(data => {
                  if (data.resultCode === 0) {
                    props.unfollow(props.id);
                  }
                });
              }}>Отписаться</button> :

              <button onClick={() => {
                setFollow(props.id).then(data => {
                  if (data.resultCode === 0) {
                    props.follow(props.id);
                  }
                });
              }}>Подписаться</button>
          }
        </div>
      </div>
      <div className={s.wrap2}>
        <div className={s.wrap3}>
          <div>{props.name}</div>
          <br/>
          <div>{props.status}</div>
        </div>
        <div>
          {'props.location.city' + ', ' + 'props.location.country'}
        </div>
      </div>
    </div>
  );
}
