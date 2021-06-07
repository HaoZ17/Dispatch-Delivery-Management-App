/* Author: Zhao Tang & Dan Li
v2 - update css 05/29/2021
*/
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import '../style/PackageTracking.css';
import ReactDOM from 'react-dom';

import { Steps, PageHeader, Breadcrumb, Row, Col } from "antd";
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
const isLoggedIn = false;
class PackageTracking extends Component {
    handleBackHome = () => {
        this.isLoggedIn ?
            this.props.history.push("/user") :
            this.props.history.push("/")
    }
    render() {
        this.isLoggedIn = this.props.userInfo === null ? false : true;
        return (
            <div>
                <Breadcrumb separator=">" className='breadcrum'>
                    <Breadcrumb.Item onClick={this.handleBackHome} className="breadcrumb">Home</Breadcrumb.Item>
                    {this.isLoggedIn ?
                        <Breadcrumb.Item onClick={() => { this.props.history.push('/user/order') }}>Order History</Breadcrumb.Item>
                        : null
                    }

                    <Breadcrumb.Item>Track Package</Breadcrumb.Item>
                </Breadcrumb>
                <Row className = 'content'>
                    <Col span={8}></Col>
                    <Col span={8}><div>
                        <h1 className='estimate'>
                            {this.props.trackingInfo === null ?
                                <div></div> :
                                this.props.trackingInfo.arriveTime

                            }
                        </h1>

                        {
                            this.props.trackingInfo === null ?
                                <p>You don't have any package</p>
                                :
                                <Steps direction="vertical" current={1}>
                                    <Step title={this.props.trackingInfo.delivererPath.Stage1.address} description={this.props.trackingInfo.delivererPath.Stage1.time} />
                                    <Step title={this.props.trackingInfo.delivererPath.Stage2.address} description={this.props.trackingInfo.delivererPath.Stage2.time} />
                                    <Step title={this.props.trackingInfo.delivererPath.Stage3.address} description={this.props.trackingInfo.delivererPath.Stage3.time} />
                                    {/* <Step title={this.props.trackingInfo.delivererPath.Stage4.address} description={this.props.trackingInfo.delivererPath.Stage4.time} /> */}
                                </Steps>
                        }
                    </div></Col>
                    <Col span={8}></Col>
                </Row>

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
