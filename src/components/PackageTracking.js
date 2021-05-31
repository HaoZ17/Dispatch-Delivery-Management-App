/* Author: Zhao Tang & Dan Li
v2 - update css 05/29/2021
*/
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import '../style/PackageTracking.css';
import ReactDOM from 'react-dom';

import { Steps, PageHeader, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";


const { Step } = Steps;

// const routes = [
//     {
//         path: 'index',
//         breadcrumbName: 'Home',
//     },
//     {
//         path: 'first',
//         breadcrumbName: 'Order History',
//     },
//     {
//         path: 'second',
//         breadcrumbName: 'Track Package',
//     },
// ];
const isLoggedIn=false;
class PackageTracking extends Component {
    handleBackHome = ()=>{
        this.isLoggedIn? 
        this.props.history.push("/user") :
        this.props.history.push("/")
      }
    render() {
        this.isLoggedIn = this.props.userInfo===null ? false:true;
        return (
            <div>
                <Breadcrumb separator=">" className ='breadcrum'>
                    <Breadcrumb.Item onClick={this.handleBackHome} className="breadcrumb">Home</Breadcrumb.Item>
                    {this.isLoggedIn?
                      <Breadcrumb.Item onClick={() => { this.props.history.push('/user/order') }}>Order History</Breadcrumb.Item>
                        :null
                    }
                  
                    <Breadcrumb.Item>Track Package</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className ='estimate'>Arriving tommorow by 10 pm</h1>

                <Steps direction="vertical" current={1}>
                    <Step title="Ordered" description="Monday, 05/13/2021 10:00 A.M." />
                    <Step title="Departed from Station A" description="Monday, 05/13/2021 10:30 A.M." />
                    <Step title="Picked Up Package" description="Monday, 05/13/2021 12:00 A.M." />
                    <Step title="Arriving tomorrow" description="" />
                </Steps>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PackageTracking));
