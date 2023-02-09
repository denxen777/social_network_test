import s from './Profileinfo.module.css';
import {Avatar} from "./Avatar/Avatar";
import {Data} from "./Data/Data";

export function ProfileInfo(props) {
  const userElements = props.user
    .map(u => <Data name={u.name} dateOfBirth={u.dateOfBirth} job={u.job} city={u.city} language={u.language}/>);

  return (
    <div className={s.profileInfo}>
      <Avatar/>
      {userElements}
    </div>
  );
}