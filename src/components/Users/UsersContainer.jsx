import {connect} from "react-redux";

import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
  setUsersCreator,
  unfollowCreator,
  toggleIsFetchingCreator
} from "../../redux/users-reducer";

import {Component} from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      const url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`;
      this.props.toggleIsFetching(true);

      axios.get(url).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
    }
  }

  onPageChange = (page) => {
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`;
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);

    axios.get(url).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.toggleIsFetching(false);
    });
  }

  render() {
    return (
      <>
        {
          this.props.isFetching ?
          <Preloader/> :
          <Users
            totalCount={this.props.totalCount} count={this.props.count}
            currentPage={this.props.currentPage} onPageChange={this.onPageChange}
            users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
        }
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingCreator(isFetching));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
