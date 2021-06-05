import React, { Component,createRef } from 'react'
import { bindActionCreators } from "redux";
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import ReactDOM from 'react-dom';

import { Steps, PageHeader } from "antd";
const { Step } = Steps;

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Home',
    },
    {
        path: 'first',
        breadcrumbName: 'Order History',
    },
    {
        path: 'second',
        breadcrumbName: 'Track Package',
    },
];

class Tracking extends Component {
    render() {
        return (
            <div>
                <PageHeader
                            className="site-page-header"
                            title=""
                            breadcrumb={{ routes }}
                            subTitle=""
                        />,
                <h1>Arriving tommorow by 10 pm</h1>
                {
                    this.props.trackingInfo === null ?
                    <p>You don't have any package</p>
                    :
                    <Steps direction="vertical" current={1}>
                        <Step title={this.props.trackingInfo.delivererPath.Stage1.address} description={this.props.trackingInfo.delivererPath.Stage1.time} />
                        <Step title={this.props.trackingInfo.delivererPath.Stage2.address} description={this.props.trackingInfo.delivererPath.Stage2.time} />
                        <Step title={this.props.trackingInfo.delivererPath.Stage3.address} description={this.props.trackingInfo.delivererPath.Stage3.time} />
                        <Step title={this.props.trackingInfo.delivererPath.Stage4.address} description={this.props.trackingInfo.delivererPath.Stage4.time} />
                    </Steps>
                }
                
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
export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
// profile page

/* Abstract
Author: Zhao Tang
Verison: 01
Date: May 24, 2021

*/