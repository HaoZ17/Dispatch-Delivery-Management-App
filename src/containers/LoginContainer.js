import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import SignUpButton from "../components/SignUpButton";
import {Link, withRouter} from "react-router-dom";
import {Breadcrumb, Icon} from "antd";

class LoginContainer extends Component {


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
            <div className="login-outer-box">
                <div className="login-navigation">
                    <Breadcrumb separator={separator} >
                        <Breadcrumb.Item
                            onClick={this.handleBackHome}
                            className="login-breadcrumb-item"
                        >
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="login-breadcrumb-item">Log In</Breadcrumb.Item>
                    </Breadcrumb>
                    {/*<Link to="/signUp">*/}
                    {/*    <SignUpButton />*/}
                    {/*</Link>*/}

                    <b className='login-title'>Log In</b>
                    <LoginForm />



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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));