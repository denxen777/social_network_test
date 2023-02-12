import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";

export function Profile(props) {
  return (
    <div>
      <ProfileInfo user={props.state.user}/>
      <Posts state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}
