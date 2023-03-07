import {connect} from "react-redux";
import {Component} from "react";
import {Login} from "./Login";
import {authorization, setAuthUserData} from "../../../redux/auth-reducer";

class LoginContainer extends Component {
  componentDidMount() {
    this.props.authorization();
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

export default connect(mapStateToProps, {setAuthUserData, authorization})(LoginContainer);
