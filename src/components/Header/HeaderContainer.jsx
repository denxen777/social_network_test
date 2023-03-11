import {Component} from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  };
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);