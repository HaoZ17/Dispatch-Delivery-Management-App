import { bindActionCreators } from "redux";
import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card, Statistic, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import OrderForm0 from "./OrderForm0";
import myurl from "../style/image/homepage.jpg";
const { TextArea } = Input;

class OrderForm6 extends React.Component {
    state = { 
      iamgeUrl:myurl,
      cardLastFour:"0000",
      timer: "10"
    }
  
    // constructor() {
      
    // }
      asyncredeem=async()=>{
        if(this.props.userInfo!==null){
          this.props.actionController.redeem();
          await this.props.actionController.reSubmitProfile(this.props.userInfo);
          this.forceUpdate();
        }
      }
  
      render() { 
      return ( 
        <React.Fragment >
          <Row  style={{textAlign:"left"}} >  
          <Col span={10}>
          <img style={{border:"5px solid #215899" ,borderRadius:"10px", opacity:"0.8", position:"relative", marginLeft:"5em", marginTop:"5em"}} src={this.state.iamgeUrl} width="369px" height="276px" shape="round" alt="" />
          </Col>
          <Col>
          <h3 style={{color:"gray", fontWeight:"normal", fontSize:"1.3em" , paddingLeft:"2em", position:"relative", marginLeft:"5em", marginTop:"5em"}}>My SmartExpress Card({this.state.cardLastFour})</h3>
          <Statistic value={this.props.userInfo===null? "Please pay in cash":this.props.userInfo.credit} precision={2} prefix="$" style={{ fontFamily:"Trebuchet MS", paddingLeft:"2em", position:"relative", fontWeight:"600", marginLeft:"7em", marginTop:"3em"}} />
          <h3 style={{color:"gray", fontWeight:"normal", fontSize:"1.3em" , paddingLeft:"2em", position:"relative", marginLeft:"5em"}}>as of {this.state.timer}m ago</h3>
          </Col>
          </Row>
          <Row style={{position:"relative", marginLeft:"5em", marginTop:"5em"}}>
          <Button size={'large'} type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }} onClick={()=>{this.asyncredeem()}}
               >
               Reload Credit
              </Button>
          {/* <h3 onClick={()=>{this.asyncredeem()}}> Reload Link </h3> */}
          {/* <TextArea style={{border:"2px solid black" ,borderRadius:"8px", opacity:"0.8"}}  rows={1} defaultValue={"www.smartexpress.com/cards/reload"} />    */}
          </Row>
          <Row style={{position:"relative", marginLeft:"5em", marginTop:"4em"}}>
          <Col span={5}>
          <Alert style={{border:"2px solid black" ,borderRadius:"18px", opacity:"0.8", textAlign:"center", height:"4em", marginTop:"2em"}}  message={this.props.userInfo.credit<this.props.checkoutInfo.selected.price*0.11?"Your balance is too low for this order":"Please checkout with credit"} type="info" />
          </Col>
          <Col span={16} style={{position:"relative", marginLeft:"5em"}} offset={10}>
          <section style={{display:"flex", alignItems: "baseline"}}>
          <h3 style={{fontSize:"1.5em"}}>Subtotal</h3>
          <span style={{overflow:"hidden", flex:"1"}}>______________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
          <h3 style={{fontSize:"1.5em"}}>{this.props.checkoutInfo.selected.price*0.1}</h3>
          </section>
          <section style={{display:"flex", alignItems: "baseline"}}>
          <h3 style={{fontSize:"1.5em"}}>Tax</h3>
          <span style={{overflow:"hidden", flex:"1"}}>____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
          <h3 style={{fontSize:"1.5em"}}>{this.props.checkoutInfo.selected.price*0.01}</h3>
          </section>
          <section style={{display:"flex", alignItems: "baseline"}}>
          <h2 style={{fontSize:"2em"}}>Total</h2>
          <span style={{overflow:"hidden", flex:"1"}}>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
          <h2 style={{fontSize:"2em"}}>{this.props.checkoutInfo.selected.price*0.11}</h2>
          </section>
          
          </Col>
          </Row> 
          <Row style={{position:"relative", marginLeft:"5em", marginTop:"2em", textAlign:"left"}}>
               <Button size={'large'} type="text" //htmlType="cancel"
                shape="round" style={{borderColor: "#215899" }} onClick={this.props.actionController.decreaseMDButton}>
               &nbsp;  Back  &nbsp;
              </Button>
              &nbsp; &nbsp; &nbsp;
               <Button size={'large'} type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }} onClick={this.props.actionController.increaseMDButton}
               >
               Continue
              </Button>
          </Row>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm6);