import {Posts} from "./Posts";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewMassage: (text) => {
      dispatch(updatePostTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    }
  };
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);