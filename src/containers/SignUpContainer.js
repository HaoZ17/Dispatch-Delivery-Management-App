import React, {Component} from 'react';
import SignUpForm from "../components/SignUpForm";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import LoginButton from "../components/LoginButton";
import {Link, withRouter} from "react-router-dom";
import {Breadcrumb} from "antd";

class SignUpContainer extends Component {

    handleBackHome = ()=>{
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={this.handleBackHome} >Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
                </Breadcrumb>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpContainer));