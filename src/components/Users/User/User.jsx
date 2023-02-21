import s from './User.module.css';

export const User = (props) => {

  return (
    <div className={s.container}>
      <div className={s.wrap1}>
        <div className={s.avatar}>
          <img src={props.img} alt="avatar"/>
        </div>
        <div>
          {props.followed ?
            <button onClick={() => props.unfollow(props.id)}>Отписаться</button> :
            <button onClick={() => props.follow(props.id)}>Подписаться</button>}
        </div>
      </div>
      <div className={s.wrap2}>
        <div className={s.wrap3}>
          <div>{props.fullName}</div>
          <div>{props.status}</div>
        </div>
        <div>
          {props.location.city + ', ' + props.location.country}
        </div>
      </div>
    </div>
  );
}