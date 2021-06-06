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
    state = {
        processing: [{ from: "local", to: "future", size: "50m^3m", orderWeight: "10 pounds", shipTime: "2021-05-21-12:21", deliverTime: "2021-05-27-12:21" },
        { from: "company", to: "home", size: "100m^2m", orderWeight: "40 pounds", shipTime: "1999-05-21-12:21", deliverTime: "1999-05-23-12:21" },
        { from: "china", to: "USA", size: "2000m^400m", orderWeight: "8 pounds", shipTime: "200-05-21-12:21", deliverTime: "1999-05-24-12:21" }],
        delivered: [{ from: "santa clara", to: "san cruz", size: "50inch^3inch", orderWeight: "10 kg", shipTime: "2000-05-21-12:21", deliverTime: "1999-05-22-12:21" },
        { from: "east", to: "west", size: "110inch^8inch", orderWeight: "1600kg", shipTime: "2015-05-21-12:21", deliverTime: "1999-05-25-12:21" },
        { from: "japan", to: "korea", size: "90inch^7inch", orderWeight: "9 kg", shipTime: "2019-05-21-12:21", deliverTime: "1999-05-27-12:21" }],
    };

    handleEmptyInput = () => {
         this.setState({
             error: "Please input your tracking number!"
         })
    };

    render() {
        return (
            <div>
                    <Content>
                        <div className="row-outer-box">
                            <div className="row">


                                <img src={tracking_icon} className="tracking-icon" alt="tracking" />



                                <p className="tracking-text"> Tracking</p>

                                <TrackingOnHome className="tracking-input" onEmptyInput = {this.handleEmptyInput}/> 
                                /*{<TrackingOnHome className="tracking-input"/>}*/


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
                            {this.state.processing === null ? (
                                <div >
                                    <img src={homeimage} class="center"></img>
                                </div>
                            ) : (
                                <div className="home-background">
                                    <a class="href">
                                        <img src={home_img} alt="logo" />
                                        <div className='recentorder'>
                                            <List className='orderlist' size="small">
                                                <p>Estimated: {this.state.processing[0].deliverTime} </p>
                                                <p>From: {this.state.processing[0].from} </p>
                                                <p>To: {this.state.processing[0].to} </p>
                                                <p>Size: {this.state.processing[0].size} </p>
                                                <p>Weight: {this.state.processing[0].weight}</p>
                                                <p>Ship time: {this.state.processing[0].shipTime}</p>
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
