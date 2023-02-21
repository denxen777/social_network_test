import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";

export function Friends(props) {
  const friendElements = props.friendsPage.friends
    .map(f => <Friend key={f.id} name={f.name} img={f.img}/>);

  return (
    <div className={s.friends}>
      {friendElements}
    </div>
  );
}