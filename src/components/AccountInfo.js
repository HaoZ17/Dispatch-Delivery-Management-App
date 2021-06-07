/*
Author: Zhao Tang & Dan Li
Version: 1 - basic function 05/25/2021
         2 - css adjustment 05/29/2021
*/
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
import { Layout } from 'antd';
import { List, Card, PageHeader, Breadcrumb } from 'antd';
import {
    HomeOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import '../style/AccountInfo.css';
import { withRouter } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

// const routes = [
//     {
//         path: '/user',
//         breadcrumbName: 'Home',
//     },
//     {
//         path: 'first',
//         breadcrumbName: 'Profile Overview',
//     },
// ];

class AccountInfo extends React.Component {

    constructor(props){
        super(props);

    }
    



    render() {
        return (
            <div>
                <Layout>
                    <Header><h1>Account Information</h1></Header>
                    <Content>
                        {/* <PageHeader
                            className="site-page-header"
                            title=""
                            breadcrumb={{ routes }}
                            subTitle=""
                        /> */}
                        <Breadcrumb separator=">" className ='breadcrum'>
                            <Breadcrumb.Item onClick={() => { this.props.history.push('/user') }}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Profile Overview</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row className='index' gutter={24}>
                            <Col span={11} className="left-side">
                                <Card className="infocard" title={<span><SmileOutlined /> Personal Info </span>} bordered={true}>
                                    <List class='personalinfo' bordered='false'>
                                        <List.Item>{'Name    : ' + this.props.userInfo.name}</List.Item>
                                        <List.Item>{'Email address : ' + this.props.userInfo.email}</List.Item>
                                        <List.Item>{'Password   : ' + this.props.userInfo.password}</List.Item>
                                        <List.Item>{'Address : ' + this.props.userInfo.address}</List.Item>
                                        <List.Item>{'Zipcode : ' + this.props.userInfo.zipcode}</List.Item>
                                        <List.Item>{'Mobile : ' + this.props.userInfo.mobile}</List.Item>
                                    </List>
                                </Card>
                            </Col>
                            <Col span={11} className="right-side">
                                <Card className="infocard" title={<span> <HomeOutlined /> Address </span>} bordered={true}>
                                    <List class='address' bordered='false'>
                                        <List.Item>{this.props.userInfo.shippingAddress}</List.Item>
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
                                <Button type="primary" onClick={() => (this.props.history.push('/user/accountInfo/edit'))}>Edit</Button>
                            </Col>
                        </Row>

                    </Footer>
                </Layout>
            </div >

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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountInfo));