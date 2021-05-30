import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import SignUpButton from "../components/SignUpButton";
import {Link, withRouter} from "react-router-dom";
import {Breadcrumb} from "antd";

class LoginContainer extends Component {


    handleBackHome = ()=>{
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={this.handleBackHome}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Log In</Breadcrumb.Item>
                </Breadcrumb>
                {/*<Link to="/signUp">*/}
                {/*    <SignUpButton />*/}
                {/*</Link>*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));