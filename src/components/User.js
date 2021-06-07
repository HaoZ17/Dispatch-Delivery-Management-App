/* 
Author: Bochao, Zhao Tang, Dan Li, Xiao Zhang, Yun Chang
Version 
    1.0 - 
    2.0 - 06/05/2021 - add features from non-login
*/
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { List, Row, Col, Button } from "antd";
import { Layout } from 'antd';
import { Link } from "react-router-dom";

import homeimage from '../style/image/homepage.jpg';
import shipping_icon from "../style/image/shipping_icon.svg";
import tracking_icon from "../style/image/tracking_icon.svg";
import home_img from "../style/image/home_img.svg";

import '../style/User.css';
import TrackingOnHome from "../components/TrackingInputOnHome";

import { withRouter } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

class User extends Component {

    // test data, should get data from store latter
    // since delivered/estimate deliver time and other basic info are not stored together,
    // my current data structure is not accurate, we can change this part of code latter after discussion with backend

    handleEmptyInput = () => {
         this.setState({
             error: "Please input your tracking number!"
         })
    };

    render() {
        const pendingData = this.props.orderHistory.pending.pending;
        let lastPending=null;
        if(pendingData.length!==0){
            lastPending = pendingData[pendingData.length-1];
        }
        return (
            <div>
                    <Content>
                        <div className="row-outer-box">
                            <div className="row">


                                <img src={tracking_icon} className="tracking-icon" alt="tracking" />



                                <p className="tracking-text"> Tracking</p>

                                <TrackingOnHome className="tracking-input" onEmptyInput = {this.handleEmptyInput}/> 


                                <Link to="/placeOrder">
                                    <img src={shipping_icon} className="shipping-icon" alt="shipping" />
                                </Link>

                                <Link to="/placeOrder">
                                    <p className="shipping-text"> Shipping</p>
                                </Link>

                            </div>
                        </div>
                                                {/* <Row justify="end">
                            <Col span={4}></Col>
                            <Col span={4}><Button class="center"
                                onClick={() => {
                                    this.props.history.push("/packagetracking");
                                }}
                            ><AimOutlined /> Tracking</Button></Col>
                            
                            <Col span={4}></Col>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <Button class="center"
                                    onClick={() => {
                                        this.props.actionController.resetDisplayModal();
                                        this.props.history.push("/placeOrder");
                                    }}
                                ><CarOutlined /> Shipping</Button>
                            </Col>
                            <Col span={4}></Col>
                        </Row> */}
                        <div>
                            {lastPending=== null ? (
                                <div >
                                    <img src={homeimage} class="center"></img>
                                </div>
                            ) : (
                                <div className="home-background">
                                    <a class="href">
                                        <img src={home_img} alt="logo" />
                                        <div className='recentorder'>
                                            
                                            <List className='orderlist' size="small">
                                                <p>Estimated: {lastPending.arriveTime} </p>
                                                <p>From: {lastPending.senderAddress} </p>
                                                <p>To: {lastPending.receiverAddress} </p>
                                                <p>Size: {lastPending.size} </p>
                                                <p>Weight: {lastPending.weight}</p>
                                                <p>Ship time: {lastPending.createTime}</p>
                                            </List>
                                        </div>
                                    </a>
                                    <b className='SMA'>SMA</b>
                                    <b className='RT'>RT</b>
                                    <b className='EXPRESS'>EXPRESS</b>
                                </div>)}
                        </div>
                    </Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
