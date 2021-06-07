import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card, Radio } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import robot from "../style/image/robot.jpg";
import drone from "../style/image/drone.jpg";
import myurl from "../style/image/homepage.jpg";


const { Meta } = Card;
const layout = {
    labelCol: {
      span: 18,
    },
    wrapperCol: {
      span: 100,
    },
  };

    class OrderForm3 extends React.Component {

      state={
        cardNow:0,
        image1:drone,
        image2:robot

      }
  
      clickChange1 = () => {
        console.log("change to Drone");
        this.setState({
          cardNow:1
        });
        this.props.actionController.saveOptionInfo(this.props.options.drone);
      }
  
      clickChange2 = () => {
        console.log("change to Robot");
        this.setState({
          cardNow:2
        });
        this.props.actionController.saveOptionInfo(this.props.options.robot);
      }

    

      // submitOrderForm2 = () =>{
      //   const data = this.props.selected;
      //   // this.props.actionController.loadSelectedInfo(data);
      //   this.props.actionController.increaseMDButton();
      // }

      changeNum = () => {
        var num = Math.sqrt(Number(this.props.options.drone.price));
        console.log(num)
      }

        render() { 
          return ( 
            <React.Fragment style={{textAlign:"left"}}>

              <Row style={{textAlign:"left"}} type="flex" gutter={16}>
              &nbsp; &nbsp;             &nbsp; &nbsp;            &nbsp; &nbsp;
              <Radio.Group //onChange={onChange} 
              value={this.state.cardNow} 
              >
                <Col span={15} style={{paddingLeft:'10px'}}>
                <Radio value={1} onClick={this.clickChange1}>Drone From Station A</Radio>
                </Col>
                <Col span={5} style={{paddingLeft:'10px'}}>  
                <Radio value={2} onClick={this.clickChange2}>Robot From Station B</Radio>
                </Col>
              </Radio.Group>
              </Row>

              <Row type="flex" gutter={16}>
              <Col span={5} style={{paddingLeft:'10px'}}>
              <Card
                hoverable
                style={{ width: 240, textAlign:"center", margin:'20px'  }}
                title="Fastest"
                cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="drone" src={this.state.image1} />}
                onClick={this.clickChange1}
              >
                <br/>
                <text> Drone From Station A</text>
              <Meta style={{textAlign:"center"}} title={this.props.options.drone.price/10} description="Same Day Shipping"  />
            </Card>
              </Col>
              <Col span={3} style={{paddingLeft:'10px'}}>
            <Card
                hoverable
                style={{ width: 240, textAlign:"center", margin:'20px' }}
                title="Lowest Cost"
                cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="robot" src={this.state.image2} />}
                onClick={this.clickChange2}
              >
                <br/>
                <text> Robot From Station B</text>
              <Meta style={{textAlign:"center"}} title={this.props.options.robot.price/10} description="Next Day Shipping"  />
            </Card>
            </Col>
            </Row>
            &nbsp; &nbsp;
            <Row>
                  <Col span={2} style={{paddingLeft:'20px'}}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                   <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.decreaseMDButton}>
                   &nbsp;  Back  &nbsp;
                  </Button>
                  </Form.Item>
                  </Col>
                  &nbsp;   &nbsp;
                  <Col span={1} style={{paddingLeft:'20px'}}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                   <Button type="primary" htmlType="submit" shape="round"  onClick={this.props.actionController.increaseMDButton}>
                   Continue
                  </Button>
                  </Form.Item>
                  </Col>  
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
      
    export default connect(mapStateToProps, mapDispatchToProps)(OrderForm3);