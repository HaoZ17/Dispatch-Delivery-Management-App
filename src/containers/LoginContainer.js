import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import SignUpButton from "../components/SignUpButton";
import {Link} from "react-router-dom";

class LoginContainer extends Component {
    render() {
        return (
            <div>

                <Link to="/signUp">
                    <SignUpButton />
                </Link>

                <b className='login-title'>Log In</b>
                <LoginForm />



            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionController: bindActionCreators({ ...actions }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);