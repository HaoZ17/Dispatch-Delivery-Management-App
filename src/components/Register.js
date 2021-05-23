import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { Form, Icon, Input, Button, Row, Col, Menu, Dropdown,message } from 'antd';
import React from 'react';

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="user" />
            3rd item
        </Menu.Item>
    </Menu>
);

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

class Register extends React.Component {


    submitRegisterInfo = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.actionController.loadRegisterInfo(values);
                console.log(values);
            }
        });
    }




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
                {/*<Button shape="round" type="primary" onClick={this.props.actionController.isshowRegForm} style={{ marginRight: '20px' }}>*/}
                {/*    Register</Button>*/}
                {/*<Modal*/}
                {/*    title="Register"*/}
                {/*    visible={this.props.showRegForm}*/}
                {/*    onCancel={this.props.actionController.isshowRegForm}*/}
                {/*    footer={null}*/}
                {/*    destroyOnClose={true}*/}
                {/*>*/}
                    <Form {...formItemLayout} onSubmit={this.submitRegisterInfo} className="register-form">
                        <Row>
                            <Col span={8} offset={1}>
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

                                <Form.Item>
                                    {/*{getFieldDecorator('remember', {*/}
                                    {/*    valuePropName: 'checked',*/}
                                    {/*    initialValue: true,*/}
                                    {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                                    {/*<a className="login-form-forgot" href="">*/}
                                    {/*    Forgot password*/}
                                    {/*</a>*/}
                                    <Button type="primary" onClick={this.props.actionController.isshowRegForm} className="login-form-button">
                                        Cancel
                                    </Button>
                                    <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit" className="login-form-button">
                                        Sign Up
                                    </Button>

                                </Form.Item>

                            </Col>
                            <Col span={8} offset={1}>
                                <Form.Item label="Address">
                                    {getFieldDecorator('address1', {
                                        // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Street address"
                                        />,
                                    )}
                                </Form.Item>

                                <Form.Item label="">
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
                                    <Col span={8} >
                                        <Form.Item label="City">
                                            {getFieldDecorator('City', {
                                                // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                            })(
                                                <Input
                                                    // prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="San Francisco"
                                                />,
                                            )}
                                        </Form.Item>
                                    </Col>

                                    <Col span={7} offset={1}>
                                        <Form.Item label="State">
                                            {getFieldDecorator('State', {
                                                // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                            })(
                                                <Input
                                                    // prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="CA"
                                                />,
                                            )}
                                        </Form.Item>
                                    </Col>

                                    <Col span={7} offset={1}>
                                        <Form.Item label="ZIP Code">
                                            {getFieldDecorator('address2', {
                                                // rules: [{ required: true, message: 'Please input your mobile number!' }],
                                            })(
                                                <Input
                                                    // prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                    </Form>
                {/*</Modal>*/}
            </div>


        );
    };

}
const RegisterForm = Form.create({ name: 'normal_register' })(Register);
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);