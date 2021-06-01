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
                this.props.actionController.registUser(data);

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
                            <Form.Item label="Name">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Please input your name!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Name"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="Email">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="Password">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item label="Confirm Password" hasFeedback>
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
                                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                            </Form.Item>



                        </Col>
                        <Col span={8} offset={1}>
                            <Form.Item label="Address line 1">
                                {getFieldDecorator('address1', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Street address"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item label="Address line 2">
                                {getFieldDecorator('address2', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Apt, suite, unit, building, floor, etc."
                                    />,
                                )}
                            </Form.Item>

                            <Row>
                                <Col span={9} >
                                    <Form.Item label="City" >
                                        {getFieldDecorator('City', {
                                            initialValue: "San Francisco"
                                        })(
                                            <Input
                                                placeholder="San Francisco"
                                                disabled={true}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={6} offset={1}>
                                    <Form.Item label="State">
                                        {getFieldDecorator('State', {
                                            initialValue: "CA"

                                        })(
                                            <Input
                                                placeholder="CA"
                                                disabled={true}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={7} offset={1}>
                                    <Form.Item label="ZIP Code">
                                        {getFieldDecorator('zipcode', {
                                        })(
                                            <Input
                                                placeholder=""
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>


                            </Row>
                            <Form.Item label="Mobile">
                                {getFieldDecorator('mobile', {
                                    // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Mobile number"
                                    />,
                                )}
                            </Form.Item>

                        </Col>
                    </Row>
                     <Text> * indicates required field</Text>
                     <Form.Item>
                         {/*{getFieldDecorator('remember', {*/}
                         {/*    valuePropName: 'checked',*/}
                         {/*    initialValue: true,*/}
                         {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                         {/*<a className="login-form-forgot" href="">*/}
                         {/*    Forgot password*/}
                         {/*</a>*/}
                         <Button type="primary" onClick={this.handleOnCancel} className="login-form-button">
                             Cancel
                         </Button>
                         <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit" className="login-form-button">
                             Sign Up
                         </Button>

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