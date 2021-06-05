import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card, Steps } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import OrderForm0 from "../components/OrderForm0";
import OrderForm1 from "../components/OrderForm1";
import OrderForm2 from "../components/OrderForm2";
import OrderForm3 from "../components/OrderForm3";
import OrderForm4 from "../components/OrderForm4";
import OrderForm5 from "../components/OrderForm5";
import OrderForm6 from "../components/OrderForm6";
import Tracking from "../components/tracking";
import ShippingBreadcrumb from "../components/ShippingBreadcrumb";
/*
Order shipping info is Form1
package info is Form2
Deliver option is Delivered
Tracking num and congratulation is Tracking
OrderF contains the logic of conditional rendering
I tested my code by render OrderF in index.js
*/

const { Step } = Steps;

class OrderF extends React.Component {

  state={
    showing:0
  }

  renderSwitch=(level)=> {
    switch(level){
      case 1:
        return <OrderForm1/>
      case 2:
        return <OrderForm2/>
      case 3:
        return <OrderForm3 />
      case 4:
        return <OrderForm6 />
      case 5:
        return <OrderForm5 />
      case 6:
        return <OrderForm4/>
      default:
        // <Form0/>
        return <OrderForm0/>
    }

  }
  data1=()=>({
    1:"@",
    2:"#"
})

  renderText() {
    switch(this.props.displayModal){
      case 1:
        return <h1 style={{fontWeight:"lighter"}}><p>Where are you <text style={{fontWeight:"normal"}}>shipping to</text>?</p></h1>
      case 2:
        return <h1 style={{fontWeight:"lighter"}}>What kind of package?</h1>
      case 3:
        return <h1 style={{fontWeight:"lighter"}}>How would you like it delivered?</h1>
      case 4: 
        return <h1 style={{fontWeight:"lighter"}}>Your payment information</h1>
      case 5:
        return <h1 style={{fontWeight:"lighter"}}>Please review your order</h1>
      default:
        // <Form0/>
        return <h1 style={{fontWeight:"lighter"}}><p>Where are you <text style={{fontWeight:"normal"}}>shipping from</text>?</p></h1>
    }
  }

    render() { 
        return ( 
          <React.Fragment>
            {/* <button onClick={this.props.actionController.jumptest}>JUMP</button>
            {this.props.jumpTest===true ? <Delivered /> : <Tracking /> } */}
            <div style={{verticalAlign:"middle"}}> 
            <button onClick={()=>{this.props.actionController.checkDataform(this.data1())}}>CheckData</button>
            <Row style={{textAlign:"left"}} >
            <ShippingBreadcrumb/>
            </Row>
            <Row>
              <Col span={13} offset={0}>
                {this.renderText()}
              </Col>
            </Row>
            <Row type="flex" align="middle" justify="start">
            <Col span={3} offset={1} verticalAlign="center">
            <Steps style={{fontSize:"3rem",}} direction="vertical"  current={this.props.displayModal}>
                  <Step title="Where" description="↓"/>
                  <Step title="What" description="↓" />
                  <Step title="How" description="↓" />
                  <Step title="Payment" description="↓" />
                  <Step title="Confirm" />
            </Steps>
            </Col>
            <Col span={17} offset={3}>
            {this.renderSwitch(this.props.displayModal)}
            </Col>
            </Row>
            </div>
          </React.Fragment>  
        );
    }
}
 

// class PaymentIndo extends React.Component {
//   state = { iamgeUrl:"https://lh3.googleusercontent.com/deWOogd8V6YRFieK0ccV3yi-m20ER2kpydIvq6CVmxqTMrH1sV7R0EPt-1O0lYmSOjyukg=s113" }
//   render() { 
//     return ( 
//       <React.Fragment>
//         <img style={{borderRadius:"10px"}} src={this.state.iamgeUrl} width="246px" height="184px" shape="round" alt="" />
//       </React.Fragment>
//      );
//   }
// }
 
 
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderF);