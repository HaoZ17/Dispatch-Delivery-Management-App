import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import OrderForm0 from "../components/OrderForm0";
import OrderForm1 from "../components/OrderForm1";
import OrderForm2 from "../components/OrderForm2";
import OrderForm3 from "../components/OrderForm3";
import OrderForm4 from "../components/OrderForm4";
/*
Order shipping info is Form1
package info is Form2
Deliver option is Delivered
Tracking num and congratulation is Tracking
OrderF contains the logic of conditional rendering
I tested my code by render OrderF in index.js
*/


class OrderF extends React.Component {

  renderSwitch=(level)=> {
    switch(level){
      case 1:
        return <OrderForm1/>
      case 2:
        return <OrderForm2/>
      case 3:
        return <OrderForm3 />
      case 4:
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

    render() { 
        return ( 
          <React.Fragment>
            {/* <button onClick={this.props.actionController.jumptest}>JUMP</button>
            {this.props.jumpTest===true ? <Delivered /> : <Tracking /> } */}
            <div>
            <button onClick={()=>{this.props.actionController.checkDataform(this.data1())}}>CheckData</button>
            {this.renderSwitch(this.props.displayModal)}
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