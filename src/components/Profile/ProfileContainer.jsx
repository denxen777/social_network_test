import {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

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

class ProfileContainer extends Component {
  componentDidMount() {
    let params = this.props.router.params.userId;
    if (!params) params = 2;

    this.props.getProfile(params);
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile
  };
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
