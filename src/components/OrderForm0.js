import React, { Component,createRef } from 'react'
import { Form, Input, Button, Icon, Typography, Checkbox, message, Modal, InputNumber, Col, Row, Card } from 'antd';
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";


import {Link} from "react-router-dom";
const layout = {
    labelCol: {
      span: 18,
    },
    wrapperCol: {
      span: 100,
    },
  };
  
class OrderForm0 extends Component {
    // constructor(props){
  //     super(props)
  //     this.NameRef=new createRef();
  // }

  // data2=()=>({
  //     Name: this.NameRef.current.value
  // })
  // onClick={()=>{this.props.actionController.checkDataform(this.data2())}}
  state = {
    confirmDirty: false,
};

  submitOrderForm0 = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            const{name, address, zipCode, mobile, email} = values

            const data = {
                senderName: name,
                fromAddress: address,
                from: zipCode,                
                senderMobile: mobile,
                senderEmail: email,                
            }
            //console.log(data)
            
            this.props.actionController.checkDataform(data);
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
                //name="form1"
                initialValues={{ remember: true }}
                name="form1"
                // onFinish={this.onFinish}
                preserve={false}
                onSubmit={this.submitOrderForm0}
                style={{textAlign:"left"}}
              >
                <Row>
                  <Col span={18}>
                <Form.Item
                  label={`Name`}
                  name="Name"
                  rules={[{ required: true, message: 'Please input your Name!' }]}
          
                >
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Name"
                    />,
                )}                  
                </Form.Item>
    
                <Form.Item
                  label="Address"
                  name="Address"
                  rules={[{ required: true, message: 'Please input your Address!'}]}
                  // margin-right='10px'
                >
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="address"
                    />,
                )}            
                </Form.Item> 
    
                <Form.Item
                  label="Zip Code"
                  name="Zip-Code"
                  rules={[{ required: true, message: 'Please input your Zip Code!', type: 'number'}]}
                >
                {getFieldDecorator('zipCode', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="zipCode"
                    />,
                )}     
                </Form.Item>
    
                <Form.Item
                  label="Mobile"
                  name="Mobile"
                  rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                >
                {getFieldDecorator('mobile', {
                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                })(
                    <Input
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Mobile number"
                    />,
                )}
                </Form.Item>
    
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[{ required: false, message: 'Please input your Email!', type: 'email'  }]}
                >
                  {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="email"
                                />,
                            )}
                </Form.Item>
                </Col>
                </Row>
                <Row>
                <Col span={1}>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                 <Button type="primary" htmlType="submit" shape="round" >
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
const OrderFormInput0 = Form.create({ name: 'normal_orderForm0' })(OrderForm0);
 
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
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderFormInput0);