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
    class OrderForm2 extends React.Component {
        render() { 
          return ( 
            <React.Fragment>
                <Form
                  //bname="form2"
                  initialValues={{ remember: true }}
                  // onFinish={this.onFinish}
                  preserve={false}
                >           
                  <Form.Item
                    label="Length"
                    name="Length"
                    rules={[{ required: true, message: 'Please input Length!' }]}
                  >
                    <Row>
                    <Col span={4}>
                    <Input placeholder="Length" /> 
                    </Col>
                    <Col span={4}>
                    <text> &nbsp;&nbsp; in</text>
                    </Col>
                    </Row>
                  </Form.Item>           
                  <Form.Item
                    label="Width"
                    name="Width"
                    rules={[{ required: true, message: 'Please input your Width!' }]}
                  >
                    <Row>
                    <Col span={4}>
                    <Input
                      // type={this.state.displayPass}
                      // id="myInput"
                      placeholder="Width"
                    />
                    </Col>
                    <Col span={4}>
                    <text> &nbsp;&nbsp; in</text>
                    </Col>
                    </Row>
                  </Form.Item>  
                  <Form.Item
                      label="Height"
                      name="Height"
                      rules={[{ required: true, message: 'Please input Height!' }]}
                    >
                      <Row>
                      <Col span={4}>
                      <Input
                        placeholder="Height"
                      />
                      </Col>
                      <Col span={4}>
                      <text> &nbsp;&nbsp; in</text>
                      </Col>
                      </Row>
                    </Form.Item>             
                   <Form.Item
                        label="Declared Value"
                        name="Declared-Value"
                        rules={[{ required: false, message: 'Please input Declared Value!' }]}
                      >
                        <Row>
                        <Col span={8}>
                        <Input
                          placeholder="Declared Value"
                        />
                        </Col>
                        <Col span={4}>
                        <text> &nbsp;&nbsp; usd</text>
                        </Col>              
                        </Row>
                    </Form.Item>
                   <Form.Item
                        label="Weight"
                        name="Weight"
                        rules={[{ required: true, message: 'Please input Weight!' }]}
                      >
                        <Row>
                        <Col span={8}>
                        <Input
                          placeholder="Declared Value"
                        />
                        </Col>
                        <Col span={4}>
                        <text> &nbsp;&nbsp; lbs</text>
                        </Col>                
                        </Row>
                    </Form.Item>
                  <Row>
                  <Col span={1}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                   <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.decreaseMDButton}>
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
                  </Form>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm2);