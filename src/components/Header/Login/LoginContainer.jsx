import {connect} from "react-redux";
import {Component} from "react";
import {Login} from "./Login";
import {setAuthUserData} from "../../../redux/auth-reducer";
import {auth} from "../../../api/api";

class LoginContainer extends Component {
  componentDidMount() {
    auth().then(data => {
      if (data.resultCode === 0) {
        const {id, login, email} = data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
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

export default connect(mapStateToProps, {setAuthUserData})(LoginContainer);
