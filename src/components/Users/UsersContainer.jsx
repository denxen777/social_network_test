import {connect} from "react-redux";
import {getUsers, follow, unfollow} from "../../redux/users-reducer";
import {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.count);
  }

  onPageChange = (page) => {
    this.props.getUsers(page, this.props.count);
  }

  render() {
    return (
      <>
        {
          this.props.isFetching ?
            <Preloader/> :
            <Users totalCount={this.props.totalCount} count={this.props.count}
                   onPageChange={this.onPageChange} users={this.props.users}
                   followingInProgress={this.props.followingInProgress} currentPage={this.props.currentPage}
                   follow={this.props.follow} unfollow={this.props.unfollow}/>
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

export default connect(mapStateToProps, {getUsers, follow, unfollow})(UsersContainer);
