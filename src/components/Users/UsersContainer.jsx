import {connect} from "react-redux";
import {Users} from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/users-reducer";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    }
  };
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);