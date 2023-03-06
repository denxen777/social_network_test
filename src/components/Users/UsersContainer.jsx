import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleIsFetching,
  toggleIsDisable
} from "../../redux/users-reducer";
import {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getUser} from "../../api/api";


class UsersContainer extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.toggleIsFetching(true);

      getUser(this.props.currentPage, this.props.count).then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      });
    }
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);

    getUser(page, this.props.count).then((data) => {
      this.props.setUsers(data.items);
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
              users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
              followingInProgress={this.props.followingInProgress} toggleIsDisable={this.props.toggleIsDisable}/>
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleIsDisable}
)(UsersContainer);
