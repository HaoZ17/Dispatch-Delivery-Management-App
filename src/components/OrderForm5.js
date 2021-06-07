import { bindActionCreators } from "redux";
import React, { createRef } from 'react';
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card, Statistic, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import robot from "../style/image/robot.jpg";
import drone from "../style/image/drone.jpg";
const { TextArea } = Input;
const { Meta } = Card;
class OrderForm5 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        theAddress : this.props.Address,
        thePhone : this.props.Phone,
        theEmail : this.props.Email,
        length : this.props.Length,
        width : this.props.Width,
        height : this.props.Height,
        Declared : this.props.Declared,
        Weight : this.props.Weight,
        CardNow : 1,
        image1:drone,
        image2:robot
        }

      }
      asyncfunc=async()=>{
        await this.props.actionController.confirmOption();
        if(this.props.userInfo!==null){
          this.props.actionController.checkOutUpdate();
          this.props.actionController.reSubmitProfile(this.props.userInfo);
        }
        this.props.actionController.increaseMDButton();
      }
      submitOrderForm5 = () => {
        this.props.actionController.saveUserInfo();
        this.asyncfunc();
      }

      changeCard = () => {
        if(this.props.selected.type === "robot"){
          return <Card
          hoverable
          style={{ width: 240, textAlign:"center", margin:'20px'  }}
          title="Lowest Cost"
          cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="robot" src={this.state.image2} />}
        >
          <br/>
          <text> Robot From Station B</text>
        <Meta style={{textAlign:"center"}} title={this.props.options.robot.price*0.1} description="Next Day Shipping"  />
        </Card>;
        }

      else{
        return <Card
        hoverable
        style={{ width: 240, textAlign:"center", margin:'20px'  }}
        title="Fastest"
        cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="drone" src={this.state.image1} />}
      >
        <br/>
        <text> Drone From Station A</text>
      <Meta style={{textAlign:"center"}} title={this.props.options.drone.price*0.1} description="Same Day Shipping"  />
      </Card>;
      } 
      }


      mycard = () => {
        if(this.state.CardNow == 1 ) return this.state.image1;
        else return this.state.image2;
      }
  
      render() { 
        return ( <React.Fragment >
          <Row align="middle" style={{textAlign:"left"}}>
            <Col span={18}>
            <Row justify="space-between">
            <Col span={22}>
            <h3>Shipping From</h3>
            </Col>
            <Col span={2}>
            <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
            style={{ background: "#215899", borderColor: "black" }}
            >
              <PlusOutlined /> Edit
            </Button>
            </Col>
          </Row>
          <TextArea allowClear rows={4} defaultValue={this.props.fromInfo.senderName + ", " + this.props.fromInfo.senderEmail + ", " + this.props.fromInfo.senderMobile + ", " + this.props.fromInfo.fromAddress + ", " + this.props.fromInfo.from}
          />
          <br/>
          <br/>
          <Row justify="space-between">
          <Col span={22}
          >
            <h3>Shipping To</h3>
            </Col>
            <Col span={2}
            >
            <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
            style={{ background: "#215899", borderColor: "black" }}
            >
              <PlusOutlined /> Edit
            </Button>
            </Col>
          </Row>
          <TextArea allowClear rows={4} defaultValue={this.props.orderInfoAll.receiverName + ", " + this.props.orderInfoAll.receiverEmail + ", " + this.props.orderInfoAll.receiverMobile + ", " + this.props.orderInfoAll.toAddress + ", " + this.props.orderInfoAll.to}
          />
          <br/>
          <br/>
          <Row justify="space-between">
          <Col span={22}>
            <h3>Package</h3>
            </Col>
            <Col span={2}
            >
            <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
            style={{ background: "#215899", borderColor: "black" }}
            >
              <PlusOutlined /> Edit
            </Button>
            </Col>
          </Row>
          <TextArea allowClear rows={1} defaultValue={this.props.orderInfo.size + ", " + this.props.orderInfo.weight}
          />
          <br/>
          <br/>
          <Row justify="space-between">
          <Col span={22}
          >
            <h3>Order Time</h3>
            </Col>
            <Col span={2}
            >
            <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
            style={{ background: "#215899", borderColor: "black" }}
            >
              <PlusOutlined /> Edit
            </Button>
            </Col>
          </Row>
          <TextArea allowClear rows={2} defaultValue={this.props.orderInfo.time}
          />
          <br/>
          <br/>
            </Col>
  
            <Col span={4} style={{paddingLeft:'10px'}}>
              <Row >
                <Col span={2} offset={20}>
              <Button type="primary" shape="round" size={'small'} //onClick={this.showDrawer} 
                style={{ background: "#215899", borderColor: "black" }}
              >
              <PlusOutlined /> Edit
              </Button>
              </Col>
              </Row>
          {this.changeCard()}
          </Col>
  
          </Row>
          <Row style={{textAlign:"left"}}>
          &nbsp; &nbsp; &nbsp;
          <Button type="text" htmlType="submit" shape="round" style={{borderColor: "#215899" }} onClick={this.props.actionController.decreaseMDButton}>
          &nbsp;  Back &nbsp;
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }} onClick={this.submitOrderForm5}>
                Place Order
          </Button>
          </Row>
          </React.Fragment> );
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
      
    export default connect(mapStateToProps, mapDispatchToProps)(OrderForm5);