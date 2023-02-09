import s from './Header.module.css';
import {Logo} from "./Logo/Logo";
import {Title} from "./Title/Title";
import {Output} from "./Output/Output";

export function Header() {
  return (
    <div className={s.header}>
      <Logo/>
      <Title/>
      <Output/>
    </div>
  );
}