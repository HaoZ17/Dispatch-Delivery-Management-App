import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import boxes from "../style/image/box.png";
const layout = {
  labelCol: {
    span: 18,
  },
  wrapperCol: {
    span: 100,
  },
};
    class OrderForm2 extends React.Component {
      state = {
        boxurl: boxes,
        confirmDirty: false,
      }
      submitOrderForm2 = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const{length, width, height, declaredValue, weight} = values

                const size = length * width * height
    
                const data = {
                  senderName: this.props.fromInfo.senderName,
                  fromAddress: this.props.fromInfo.fromAddress,
                  from: this.props.fromInfo.from,                
                  senderMobile: this.props.fromInfo.senderMobile,
                  senderEmail: this.props.fromInfo.senderEmail,
                  receiverName: this.props.orderInfoAll.receiverName,
                  toAddress: this.props.orderInfoAll.toAddress,
                  to: this.props.orderInfoAll.to,                
                  receiverMobile: this.props.orderInfoAll.receiverMobile, 
                  receiverEmail: this.props.orderInfoAll.receiverEmail, 
                  size: size,
                  declaredValue: declaredValue,
                  weight: weight,
                }
                //console.log(data)
                
                this.props.actionController.checkDataformPackageInfo(data);
                this.props.actionController.increaseMDButton();
    
            }
        });
    }
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
        render() { 
          const { getFieldDecorator } = this.props.form; 
          return ( 
            <React.Fragment>
                <Form
                  //bname="form2"
                  initialValues={{ remember: true }}
                  // onFinish={this.onFinish}
                  preserve={false}
                  onSubmit={this.submitOrderForm2}
                  style={{textAlign:"left"}}
                >           
                <Row>
                <Col span={6}>
                  <Form.Item
                    label="Length"
                    name="Length"
                    rules={[{ required: true, message: 'Please input Length!' }]}
                  >
                    <Row>
                    <Col span={22}>
                    {getFieldDecorator('length', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        placeholder="length" required
                    />,
                )}    
                    </Col>
                    <Col span={2}>
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
                    <Col span={22}>

                    {getFieldDecorator('wideth', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                  <Input
                  // type={this.state.displayPass}
                  // id="myInput"
                  placeholder="width" required
                />,
                )}    

                    </Col>
                    <Col span={2}>
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
                      <Col span={22}>
                      {getFieldDecorator('height', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                  <Input
                  placeholder="height" required
                />,
                )}                       

                      </Col>
                      <Col span={2}>
                      <text> &nbsp;&nbsp; in</text>
                      </Col>
                      </Row>
                    </Form.Item>
                    </Col>
                    <Col span={2}>
                      <img src={this.state.boxurl} width="330rem" height="300rem">
                      </img>
                    </Col>
                    </Row>             
                   <Form.Item
                        label="Declared Value"
                        name="Declared-Value"
                        rules={[{ required: false, message: 'Please input Declared Value!' }]}
                      >
                        <Row>
                        <Col span={13}>
                        {getFieldDecorator('declaredValue', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                  <Input
                  placeholder="declared Value"
                />,
                )}     

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
                        <Col span={13}>
                        {getFieldDecorator('weight', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                  <Input
                  placeholder="weight" required
                />,
                )}    

                        </Col>
                        <Col span={4}>
                        <text> &nbsp;&nbsp; lbs</text>
                        </Col>                
                        </Row>
                    </Form.Item>
                  <Row>
                  <Col span={2}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                   <Button type="text" htmlType="submit" shape="round" onClick={this.props.actionController.decreaseMDButton}>
                   &nbsp;  Back  &nbsp;
                  </Button>
                  </Form.Item>
                  </Col>
                  <Col span={1}>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                   <Button type="primary" htmlType="submit" shape="round" >
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
const OrderFormInput2 = Form.create({ name: 'normal_orderForm0' })(OrderForm2);
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderFormInput2);