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
          <TextArea allowClear rows={4} defaultValue={"发送地的信息"}
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
          <TextArea allowClear rows={4} defaultValue={this.state.theAddress + ", " + this.state.theEmail + ", " + this.state.thePhone + " (客户地址)"}
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
          <TextArea allowClear rows={1} defaultValue={this.state.length + "' x " + this.state.width + "' x " + this.state.height + ", " + this.state.Declared + ", " + this.state.Weight + " lbs" + " (package大小)"}
          />
          <br/>
          <br/>
          <Row justify="space-between">
          <Col span={22}
          >
            <h3>Pick up</h3>
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
          <TextArea allowClear rows={2} defaultValue={"还没有信息"}
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
          <Card
            hoverable
            style={{ width: 240, textAlign:"center", margin:'20px'  }}
            title="Fastest"
            cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="drone" src={this.mycard()} />}
          >
            <br/>
            <text> Drone From Station A</text>
          <Meta style={{textAlign:"center"}} title={this.props.dronePrice} description="Same Day Shipping"  />
          </Card>
          </Col>
  
          </Row>
          <Row style={{textAlign:"left"}}>
          &nbsp; &nbsp; &nbsp;
          <Button type="text" htmlType="submit" shape="round" style={{borderColor: "#215899" }} onClick={this.props.actionController.decreaseMDButton}>
          &nbsp;  Back &nbsp;
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button type="primary" htmlType="submit" shape="round" style={{ background: "#215899", borderColor: "black" }} onClick={this.props.actionController.increaseMDButton}>
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