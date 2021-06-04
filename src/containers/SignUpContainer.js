import React, {Component} from 'react';
import SignUpForm from "../components/SignUpForm";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import LoginButton from "../components/LoginButton";
import {Link, withRouter} from "react-router-dom";
import {Breadcrumb, Icon} from "antd";

class SignUpContainer extends Component {

    handleBackHome = ()=>{
        this.props.history.push("/")
    }

    render() {

        const separator =
            <Icon
                type="caret-right"
                style={{
                    fontSize: '20px',
                    color: '#215899'
                }}
            />

        return (
            <div className="signup-outer-box">
                <div className="login-navigation">
                    <Breadcrumb separator={separator} >
                        <Breadcrumb.Item
                            onClick={this.handleBackHome}
                            className="login-breadcrumb-item"
                        >Home</Breadcrumb.Item>
                        <Breadcrumb.Item className="login-breadcrumb-item">Sign Up</Breadcrumb.Item>
                    </Breadcrumb>

                    <b className='login-title'>Sign Up</b>
                    <SignUpForm />
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpContainer));