import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {


    submitLoginInfo = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log(values);
                this.props.actionController.loaduserInfo(values);
                this.props.history.push("/user");
            }
        });
    }

    handleOnCancel = () => {
        this.props.history.push('/')
    }


    render = () => {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <div className='login-block'>
                    <Form onSubmit={this.submitLoginInfo} className="login-form">
                        <t style={{color:'red', marginLeft: '-485px'}}>*</t>
                        <b className='login-form-item-label'>Email</b>
                        <Form.Item label="">
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    // placeholder="email"
                                    style={{
                                        fontSize: '20px',
                                    }}
                                />,
                            )}
                        </Form.Item>
                        <t style={{color:'red', marginLeft: '-441px'}}>*</t>
                        <b className='login-form-item-label'>Password</b>
                        <Form.Item label="" style={{
                            fontSize: '24px',
                        }}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    // placeholder="Password"
                                    style={{
                                        fontSize: '20px',
                                    }}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {/*{getFieldDecorator('remember', {*/}
                            {/*    valuePropName: 'checked',*/}
                            {/*    initialValue: true,*/}
                            {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                            {/*<a className="login-form-forgot" href="">*/}
                            {/*    Forgot password*/}
                            {/*</a>*/}


                            <Button  type="primary" htmlType="submit" className="login-form-button">
                                Log In
                            </Button>

                            <Button style={{ marginLeft: 8 }} type="primary" onClick={this.handleOnCancel} className="login-form-button">
                                Cancel
                            </Button>

                        </Form.Item>
                    </Form>
                </div>
            </>


        );
    };

}
const Login = Form.create({ name: 'normal_login' })(LoginForm);
//export default LoginForm;

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));