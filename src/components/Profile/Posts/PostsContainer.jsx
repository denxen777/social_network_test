import {Posts} from "./Posts";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";

export function PostsContainer(props) {
  const state = props.store.getState();

  function updateNewMassage(text) {
    props.store.dispatch(updatePostTextCreator(text));
  }

  function addPost() {
    props.store.dispatch(addPostCreator());
  }

  return (
    <Posts state={state.profilePage} updateNewMassage={updateNewMassage} addPost={addPost}/>
  );
}