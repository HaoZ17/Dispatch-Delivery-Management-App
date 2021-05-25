import React, { Component } from 'react';
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

class tracking extends Component {
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

export default Tracking;
// profile page