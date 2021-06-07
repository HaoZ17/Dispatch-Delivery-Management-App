import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";

import {withRouter} from "react-router";

const layout = {
    labelCol: {
      span: 18,
    },
    wrapperCol: {
      span: 100,
    },
  };
const isLoggedIn=false;

    class OrderForm4 extends React.Component {
        handleBackHome = ()=>{
          this.isLoggedIn? 
          this.props.history.push("/user") :
          this.props.history.push("/")
        }
        render() { 
          this.isLoggedIn = this.props.userInfo===null ? false:true;
          return ( 
            <React.Fragment >
              <div style={{textAlign:"left"}}>
            <h2> Thank you! Your order has been placed. </h2>
            <br/>
            <br/>
            <Col span={20} offset={3}>
            <Row>
            <Col span={1}>
            <img width='30em' height='30em' src={"https://cdn1.iconfinder.com/data/icons/logistics-delivery-set-3/512/28-512.png"} alt="" />
            </Col>
            <h3 style={{color:'#100B0B'}}>Your tracking number is</h3>
            </Row>
            <br/> 
            <Col span={14}>
            <Input value={this.props.trackingNumber}></Input>
            </Col>
            <br/>
            &nbsp;
            <br/>
            <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.resetDisplayModal}>
                  Shipping again
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button type="text" htmlType="submit" shape="round" 
            onClick={async()=>{
              await this.props.actionController.trackOrder(this.props.trackingNumber);
              this.props.history.push("/packagetracking")
            }}
            >
                  Tracking
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }}
            onClick={this.handleBackHome}>
                  Back to home
            </Button>
            </Col>
            </div>
            </React.Fragment>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderForm4));
