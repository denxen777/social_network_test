import {connect} from "react-redux";
import {Component} from "react";
import {Login} from "./Login";
import axios from "axios";
import {setAuthUserData} from "../../../redux/auth-reducer";

class LoginContainer extends Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
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
