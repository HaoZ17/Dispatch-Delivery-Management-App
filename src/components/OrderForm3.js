import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
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
        render() { 
          return ( 
            <React.Fragment>
              <Row type="flex" gutter={16}>
              <Col span={4} style={{paddingLeft:'10px'}}>
              <Card
                hoverable
                style={{ width: 240, textAlign:"center", margin:'20px'  }}
                title="Fastest"
                cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="example" src="https://lh3.googleusercontent.com/dSpbyX5r8iSOXzk5IW0fm8HBaYgCKj7BUwI_X7WHp91saHifVPsYGjFja0Ek-w70dKAaoQ=s85" />}
              >
                <br/>
                <text> Drone From Station A</text>
              <Meta style={{textAlign:"center"}} title="$50" description="Same Day Shipping"  />
            </Card>
              </Col>
              <Col span={3} style={{paddingLeft:'10px'}}>
            <Card
                hoverable
                style={{ width: 240, textAlign:"center", margin:'20px' }}
                title="Lowest Cost"
                cover={<img style={{paddingLeft:"10%", paddingTop:"7.5%", width:"90%", height:"90%"}} alt="example" src="https://lh3.googleusercontent.com/-AS-HjbqhzSgltvc8uWkJVRmVMZm1ayCn78do3UVYJI0Ckp2zoSEc-AM9BzvotATvhgNHg=s85" />}
              >
      
              <Meta style={{textAlign:"center"}} title="$25" description="Next Day Shipping"  />
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