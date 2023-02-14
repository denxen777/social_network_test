import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";

export function Profile(props) {
  const state = props.store.getState();

  return (
    <div>
      <ProfileInfo user={state.profilePage.user}/>
      <PostsContainer store={props.store}/>
    </div>
  );
}
