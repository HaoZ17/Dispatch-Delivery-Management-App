import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ShippingBreadcrumb extends Component {


    handleBackHome = ()=>{
        const isLoggedIn = this.props.userInfo===null ? false:true;
        if (isLoggedIn) {
            this.props.history.push("/user")
        } else {
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={this.handleBackHome} >Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Shipping</Breadcrumb.Item>
                </Breadcrumb>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShippingBreadcrumb));