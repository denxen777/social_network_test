import {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth
  };
}

const withAuthRedirect = (ComponentContainer) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={'/login'}/>

      return <ComponentContainer {...this.props}/>
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;

