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
class OrderForm1 extends Component {
    render() { 
        return ( 
          <React.Fragment>
              <Form 
                //name="form1"
                initialValues={{ remember: true }}
                name="form1"
                // onFinish={this.onFinish}
                preserve={false}
              >
    
                <Form.Item
                  label={`Name`}
                  name="Name"
                  rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                  <Input placeholder="Name" /> 
                </Form.Item>
    
                <Form.Item
                  label="Address"
                  name="Address"
                  rules={[{ required: true, message: 'Please input your Address!'}]}
                  // margin-right='10px'
                >
                  <Input
                    // type={this.state.displayPass}
                    // id="myInput"
                    placeholder="Address"
                  />
                </Form.Item> 
    
                <Form.Item
                  label="Zip Code"
                  name="Zip-Code"
                  rules={[{ required: true, message: 'Please input your Zip Code!', type: 'number'}]}
                >
                  <Input
                    placeholder="Zip"
                  />
                </Form.Item>
    
                <Form.Item
                  label="Phone"
                  name="Phone"
                  rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                >
                  <Input
                    placeholder="Phone"
                  />
                </Form.Item>
    
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[{ required: false, message: 'Please input your Email!', type: 'email'  }]}
                >
                  <Input
                    placeholder="Email"
                  />
                </Form.Item>
    
                <Row>
                <Col span={1}>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                 <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.increaseMDButton} >
                 &nbsp;  Back  &nbsp;
                </Button>
                </Form.Item>
                </Col>
                <Col span={1}>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                 <Button type="primary" htmlType="submit" shape="round" onClick={this.props.actionController.increaseMDButton}>
                 Continue
                </Button>
                </Form.Item>
                </Col>
                </Row>
                </ Form>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm1);