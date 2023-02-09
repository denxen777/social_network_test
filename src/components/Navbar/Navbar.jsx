import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export function Navbar() {
  return (
    <div className={s.nav}>
      <div>
        <NavLink to="/profile">Моя страница</NavLink>
      </div>
      <div>
        <NavLink to="/news">Новости</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Мои сообщения</NavLink>
      </div>
      <div>
        <NavLink to="/friends">Мои Друзья</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Настройки</NavLink>
      </div>
    </div>
  );
}