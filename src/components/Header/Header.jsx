import s from './Header.module.css';
import logo from "../../media/images/logo.png";
import {NavLink} from "react-router-dom";

export function Header(props) {
  return (
    <div className={s.header}>
      <div>
        <img src={logo} alt="Логотип"/>
      </div>
      <div className={s.title}>
        <a href="#"><h3>Friends</h3></a>
      </div>
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
}
