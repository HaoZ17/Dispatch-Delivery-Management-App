import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { Form, Icon, Input, Button, Row, Col,Typography} from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';


const { Text } = Typography;

class SignUpForm extends React.Component {

    state = {
        confirmDirty: false,
    };

    submitRegisterInfo = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const{name, email, password, zipcode, mobile, address1, address2, City, State} = values

                // address: street, apt number, city, state
                const address = `${address1}, ${address2}, ${City}, ${State}`

                const data = {
                    name: name,
                    email: email,
                    password: password,
                    address: address,
                    zipcode: zipcode,
                    mobile: mobile,
                }
                //console.log(data)
                this.props.actionController.loadRegisterInfo(data);

            }
        });
    }

    handleOnCancel = () => {
        this.props.history.push('/')
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };


    render = () => {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelRow: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperRow: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };



        return (


            <div>
                 <Form {...formItemLayout} onSubmit={this.submitRegisterInfo} className="signUp-form">
                    <Row>
                        <Col span={8} >
                            <t style={{color:'#215899', marginLeft: '-310px', fontSize: '24px'}}>*</t>
                            <b className='login-form-item-label'> Name</b>
                            <Form.Item label="">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Please input your name!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Name"
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>
                            <t style={{color:'#215899', marginLeft: '-310px', fontSize: '24px'}}>*</t>
                            <b className='login-form-item-label'> Email</b>
                            <Form.Item label="">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>
                            <t style={{color:'#215899', marginLeft: '-266px', fontSize: '24px'}}>*</t>
                            <b className='login-form-item-label'> Password</b>
                            <Form.Item label="">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>

                            <t style={{color:'#215899', marginLeft: '-177px', fontSize: '24px'}}>*</t>
                            <b className='login-form-item-label'> Confirm Password</b>
                            <Form.Item label="" hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                    ],
                                })(<Input.Password
                                    onBlur={this.handleConfirmBlur}
                                    style={{
                                        fontSize: '20px',
                                    }}
                                />)}
                            </Form.Item>



                        </Col>
                        <Col span={8} offset={1}>
                            <b style={{color:'#5E5E5E', marginLeft: '-221px', fontSize: '24px'}}> Address line 1</b>
                            <Form.Item label="">
                                {getFieldDecorator('address1', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Street address"
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>
                            <b style={{color:'#5E5E5E', marginLeft: '-221px', fontSize: '24px'}}> Address line 2</b>
                            <Form.Item label="">
                                {getFieldDecorator('address2', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Apt, suite, unit, building, floor, etc."
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>

                            <Row>
                                <Col span={9} >
                                    <b style={{color:'#5E5E5E', marginLeft: '-100px', fontSize: '24px'}}> City</b>
                                    <Form.Item label="" >
                                        {getFieldDecorator('City', {
                                            initialValue: "San Francisco"
                                        })(
                                            <Input
                                                placeholder="San Francisco"
                                                disabled={true}
                                                style={{
                                                    fontSize: '20px',
                                                }}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={6} offset={1}>
                                    <b style={{color:'#5E5E5E', marginLeft: '-38px', fontSize: '24px'}}> State</b>
                                    <Form.Item label="">
                                        {getFieldDecorator('State', {
                                            initialValue: "CA"

                                        })(
                                            <Input
                                                placeholder="CA"
                                                disabled={true}
                                                style={{
                                                    fontSize: '20px',
                                                }}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={7} offset={1}>
                                    <b style={{color:'#5E5E5E', marginLeft: '-8px', fontSize: '24px'}}> ZIP Code</b>
                                    <Form.Item label="">
                                        {getFieldDecorator('zipcode', {
                                        })(
                                            <Input
                                                placeholder=""
                                                style={{
                                                    fontSize: '20px',
                                                }}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>


                            </Row>
                            <b style={{color:'#5E5E5E', marginLeft: '-312px', fontSize: '24px'}}> Mobile</b>
                            <Form.Item label="">
                                {getFieldDecorator('mobile', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Mobile number"
                                        style={{
                                            fontSize: '20px',
                                        }}
                                    />,
                                )}
                            </Form.Item>

                        </Col>
                    </Row>
                     {/*<Text> * indicates required field</Text>*/}
                     <Form.Item>
                         {/*{getFieldDecorator('remember', {*/}
                         {/*    valuePropName: 'checked',*/}
                         {/*    initialValue: true,*/}
                         {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                         {/*<a className="login-form-forgot" href="">*/}
                         {/*    Forgot password*/}
                         {/*</a>*/}
                         <div style={{marginLeft: '-618px'}}>

                             <div style={{marginTop: '50px' , marginLeft: '0px'}}>
                                 <Text style={{color:'#215899' , marginLeft: '-295px', fontSize: '24px'}}>*</Text>
                                 <Text className='login-form-indicates-required-field' > indicates required field</Text>
                             </div>

                             <Button  type="primary" htmlType="submit" className="login-form-button">
                                 Sign Up
                             </Button>
                             <Button style={{ marginLeft: 16 }} type="primary" onClick={this.handleOnCancel} className="login-form-button">
                                 Cancel
                             </Button>
                         </div>
                     </Form.Item>
                </Form>
            </div>


        );
    };

}
const SignUp = Form.create({ name: 'normal_register' })(SignUpForm);
//export default RegisterForm;

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));