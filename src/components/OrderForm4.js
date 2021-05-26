import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";

const layout = {
    labelCol: {
      span: 18,
    },
    wrapperCol: {
      span: 100,
    },
  };
    class OrderForm4 extends React.Component {
        render() { 
          return ( 
            <React.Fragment>
            <h2> Thank you! Your order has been palced. </h2>
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
            <Input placeholder="Tracking Number"></Input>
            <br/>
            <br/>
            <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.resetDisplayModal}>
                  Shpping again
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button type="text" htmlType="submit" shape="round">
                  Tracking
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }}>
                  Back to home
            </Button>
            </Col>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm4);
