import {UserData} from "./UserData";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    user: state.profilePage.user
  };
}

export const UserDataContainer = connect(mapStateToProps)(UserData);