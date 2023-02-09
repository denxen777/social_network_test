import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";

export function Friends(props) {
  const friendElements = props.state.friends
    .map(f => <Friend id={f.id} name={f.name} img={f.img}/>);

  return (
    <div className={s.friends}>
      {friendElements}
    </div>
  );
}