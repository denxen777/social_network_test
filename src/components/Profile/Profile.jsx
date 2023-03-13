import {PostsContainer} from "./Posts/PostsContainer";
import {UserData} from "./UserData/UserData";

export function Profile(props) {
  return (
    <div>
      <UserData profile={props.profile} status={props.status}/>
      <PostsContainer/>
    </div>
  );
}
