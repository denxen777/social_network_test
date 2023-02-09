import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";

export function Profile(props) {
  return (
    <div>
      <ProfileInfo user={props.state.user}/>
      <Posts state={props.state} store={props.store}/>
    </div>
  );
}