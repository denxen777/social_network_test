import {connect} from "react-redux";
import {Friends} from "./Friends";

function mapStateToProps(state) {
  return {
    friendsPage: state.friendsPage
  };
}

export const FriendsContainer = connect(mapStateToProps)(Friends);