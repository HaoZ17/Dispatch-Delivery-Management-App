import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { Form, Icon, Input, Button,Typography } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';

const { Text } = Typography;

class LoginForm extends React.Component {
    state = {
        loading: false,
    };

    waitfunc=async(data)=>{
        this.setState({ loading: true });
        await this.props.actionController.signInRequest(data);
        const isLoggedIn = this.props.userInfo === null ? false : true;
        if(isLoggedIn){
            this.setState({ loading: false });
            await this.props.actionController.trackMemberOrder();
              if(this.props.orderHistory!==null){
                this.props.history.push("/user");
              }
        }else {
            this.setState({ loading: false });
        }
    }

    submitLoginInfo = async(e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            
            if (!err) {
                console.log(values);
                //this.props.actionController.signInRequest(values);
                //this.props.history.push("/user");  
                this.waitfunc(values)
            }
        });
    }

    handleOnCancel = () => {
        this.props.history.push('/')
    }


    render = () => {
        const { getFieldDecorator } = this.props.form;
        return (

                <div className='login-block'>
                    <Form onSubmit={this.submitLoginInfo} className="login-form">
                        <Text style={{color:'#215899', marginLeft: '-478px', fontSize: '24px'}}>*</Text>
                        <b className='login-form-item-label'> Email</b>
                        <Form.Item label="">
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="email"
                                    style={{
                                        fontSize: '20px',
                                    }}
                                />,
                            )}
                        </Form.Item>
                        <Text style={{color:'#215899', marginLeft: '-432px', fontSize: '24px'}}>*</Text>
                        <b className='login-form-item-label'> Password</b>
                        <Form.Item label="" style={{
                            fontSize: '24px',
                        }}>
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

                        <Form.Item>
                            {/*{getFieldDecorator('remember', {*/}
                            {/*    valuePropName: 'checked',*/}
                            {/*    initialValue: true,*/}
                            {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                            {/*<a className="login-form-forgot" href="">*/}
                            {/*    Forgot password*/}
                            {/*</a>*/}

                            <div style={{marginTop: '50px' , marginLeft: '0px'}}>
                                <Text style={{color:'#215899' , marginLeft: '-295px', fontSize: '24px'}}>*</Text>
                                <Text className='login-form-indicates-required-field' > indicates required field</Text>
                            </div>
                            <Button  type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                                Log In
                            </Button>

                            <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleOnCancel} className="login-form-button">
                                Cancel
                            </Button>

                        </Form.Item>
                    </Form>
                </div>



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