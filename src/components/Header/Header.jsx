import s from './Header.module.css';
import {Logo} from "./Logo/Logo";
import {Title} from "./Title/Title";
import LoginContainer from "./Login/LoginContainer";

export function Header() {
    return (
        <div className={s.header}>
            <Logo/>
            <Title/>
            <LoginContainer/>
        </div>
    );
}
