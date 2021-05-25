import React, { Component } from 'react';
import { Row, Col, Button } from "antd";
import { Layout } from 'antd';


import homeimage from '../style/image/homepage.jpg';
import '../style/Home.css';

import {
    AimOutlined,
    CarOutlined
  } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>

                    </Header>
                    <Content>
                        <Row justify="end">
                            <Col span={4}></Col>
                            <Col span={4}>
                            </Col>
                            <Col span={4}><Button class="center"><AimOutlined /> Tracking</Button></Col>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <Button class="center"><CarOutlined /> Shipping</Button>
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

export default Home;