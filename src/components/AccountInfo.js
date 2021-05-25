import React, { Component } from 'react';
import { Row, Col, Button } from "antd";
import { Layout } from 'antd';
import { List, Card, PageHeader } from 'antd';
import {
    HomeOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import '../style/AccountInfo.css';

const { Header, Footer, Sider, Content } = Layout;

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Home',
    },
    {
        path: 'first',
        breadcrumbName: 'Profile Overview',
    },
];

class AccountInfo extends Component {
    state = {
        accountInfo: {
            name: 'John Doe',
            email: 'abc@xx.com',
            password : '1234',
            firstName: 'John',
            lastName: 'Doe',
            billingAddress: '708 S. Cedar Street, Pensacola, FL 32503',
            shippingAddress: '708 S. Cedar Street, Pensacola, FL 32503',
            mobile: '1234567890',
            zipcode: '32503',
            credit: '100'
        },

        orderData: null
    };



    render() {
        return (
            <div>
                <Layout>
                    <Header><h1>Account Information</h1></Header>
                    <Content>
                        <PageHeader
                            className="site-page-header"
                            title=""
                            breadcrumb={{ routes }}
                            subTitle=""
                        />
                        <Row className='index' gutter={24}>
                            <Col span={11} className="left-side">
                                <Card className="infocard" title={<span><SmileOutlined /> Personal Info </span>} bordered={true}>
                                    <List class='personalinfo' bordered='false'>
                                        <List.Item>{'First Name    : ' + this.state.accountInfo.firstName}</List.Item>
                                        <List.Item>{'Last  Name    : ' + this.state.accountInfo.lastName}</List.Item>
                                        <List.Item>{'Email address : ' + this.state.accountInfo.email}</List.Item>
                                        <List.Item>{'Password : ' + this.state.accountInfo.password}</List.Item>
                                        <List.Item>{'Billing address : ' +this.state.accountInfo.billingAddress}</List.Item>
                                        <List.Item>{'Credit : ' + this.state.accountInfo.credit}</List.Item>
                                    </List>
                                </Card>
                            </Col>
                            <Col span={11} className="right-side">
                                <Card className="infocard" title={<span> <HomeOutlined /> Address </span>} bordered={true}>
                                    <List class='address' bordered='false'>
                                        <List.Item>{this.state.accountInfo.shippingAddress}</List.Item>
                                    </List>
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                    <Footer>
                        <Row justify="end">
                            <Col span={8}>col-4</Col>
                            <Col span={8}>col-4</Col>
                            <Col span={5}>col-4</Col>
                            <Col span={1}>
                                <Button type="primary">Edit</Button>
                            </Col>
                        </Row>

                    </Footer>
                </Layout>
            </div >

        );
    }
}

export default AccountInfo;
// profile page

// Sample Data
