import {User} from "./User/User";
import s from './Users.module.css';

export const Users = (props) => {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        img: './александр.jpg',
        fullName: 'Александр М.',
        status: 'I love football',
        location: {city: 'Саратов', country: 'Россия'},
        followed: true
      },
      {
        id: 2,
        img: './алексей.jpg',
        fullName: 'Алексей И.',
        status: 'I love basketball',
        location: {city: 'Иркутск', country: 'Россия'},
        followed: false
      },
      {
        id: 3,
        img: './денис.jpg',
        fullName: 'Денис К.',
        status: 'I love swimming',
        location: {city: 'Красноярск', country: 'Россия'},
        followed: false
      },
      {
        id: 4,
        img: './иван.jpg',
        fullName: 'Иван Е.',
        status: 'I love run',
        location: {city: 'Москва', country: 'Россия'},
        followed: true
      },
    ]);
  }

  const users = props.users.map(u =>
    <User key={u.id} id={u.id} img={u.img} fullName={u.fullName} status={u.status}
          location={u.location} followed={u.followed}
          follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers}/>);

  return (
    <div className={s.wrapper}>
      {users}
    </div>
  );
}