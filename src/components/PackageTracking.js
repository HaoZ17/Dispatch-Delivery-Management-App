// Author: Zhao Tang & Dan Li
import React, { Component } from 'react';
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

class PackageTracking extends Component {
    render() {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user') }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user/order') }}>Order History</Breadcrumb.Item>
                    <Breadcrumb.Item>Track Package</Breadcrumb.Item>
                </Breadcrumb>

                <h1>Arriving tommorow by 10 pm</h1>

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
export default withRouter(PackageTracking);
