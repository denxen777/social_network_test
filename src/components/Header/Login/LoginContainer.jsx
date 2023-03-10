import {connect} from "react-redux";
import {Component} from "react";
import {Login} from "./Login";
import {getAuthUserData} from "../../../redux/auth-reducer";

class LoginContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Login isAuth={this.props.isAuth} login={this.props.login}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  };
}

export default connect(mapStateToProps, {getAuthUserData})(LoginContainer);
