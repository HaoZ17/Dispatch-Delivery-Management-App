import React, {Component} from 'react';
import SignUpForm from "../components/SignUp";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import LoginButton from "../components/LoginButton";
import {Link} from "react-router-dom";

class SignUpContainer extends Component {
    render() {
        return (
            <div>
                <Link to="/login">
                    <LoginButton />
                </Link>

                <b className='signUp-title'>Sign Up</b>
                <SignUpForm />

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);