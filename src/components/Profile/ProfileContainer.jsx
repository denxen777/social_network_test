import {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{location, navigate, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
}

class ProfileContainer extends Component {
  componentDidMount() {
    let params = this.props.router.params.userId;
    if (!params) params = 28244;

    this.props.getProfile(params);
    this.props.getStatus(params);
  }

  render() {
    return (
      <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
}

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);
