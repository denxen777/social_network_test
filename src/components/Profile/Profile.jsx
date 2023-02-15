import {UserDataContainer} from "./UserData/UserDataContainer";
import {PostsContainer} from "./Posts/PostsContainer";

export function Profile() {
  return (
    <div>
      <UserDataContainer/>
      <PostsContainer/>
    </div>
  );
}
