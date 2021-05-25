import React, { Component } from 'react';
import { Row, Col, Button } from "antd";
import { Layout } from 'antd';


import homeimage from '../style/image/homepage.jpg';
import '../style/User.css';

import {
    AimOutlined,
    CarOutlined
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

class User extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>

                    </Header>
                    <Content>
                        <Row justify="end">
                            <Col span={4}></Col>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <Button class="center" onClick={
                                                () => {
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }><AimOutlined /> Tracking</Button></Col>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <Button class="center" onClick={
                                                () => {
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }><CarOutlined /> Shipping</Button>
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                        <div >
                            <img src={homeimage} class="center"></img>
                        </div>
                    </Content>
                </Layout>
            </div >
        );
    }
}

export default withRouter(User);