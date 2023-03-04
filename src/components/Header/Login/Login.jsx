import s from './Login.module.css';
import {NavLink} from "react-router-dom";

export function Login(props) {
    return (
        <div className={s.login}>
            {
                props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>
            }
        </div>
    );
}
