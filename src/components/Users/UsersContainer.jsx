import {connect} from "react-redux";
import {Users} from "./Users";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
  setUsersCreator,
  unfollowCreator
} from "../../redux/users-reducer";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountCreator(totalCount))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageCreator(page));
    }
  };
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
