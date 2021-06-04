// author: Dan Li
import { Form, Button, Input, Breadcrumb, Row, Col, Icon, Typography } from 'antd';
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../style/AccountInfoEdit.css';
import polygon from '../style/image/polygon.svg';

const { Text } = Typography;

class EditProfileForm extends React.Component {

    // test data, should get data from store latter
    state = {
        accountInfo: this.props.userInfo,

        orderData: null
    };

    render() {
        const addressArray = this.state.accountInfo.address.split(',');
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
            <div className='container'>
                {/* Home > MyProfile*/}
                <Breadcrumb separator={<img className="edit-polygon" src={polygon} ></img>} className="edit-breadcrumb">
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user') }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user/accountInfo') }}>My Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
                </Breadcrumb>

                <p className="edit-title"> Profile Edit</p>


                {/* profile edit form */}
                <Form {...formItemLayout}
                    onSubmit={this.saveProfile} // call helper function to save profile
                    className="edit-profile">
                    <Row>
                        <Col span={8} >
                            <Form.Item label="Name">
                                {getFieldDecorator('name', {
                                    initialValue: this.state.accountInfo.name,
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
                                    initialValue: this.state.accountInfo.email,
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
                                    initialValue: this.state.accountInfo.password,
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
                                    initialValue: this.state.accountInfo.password,
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
                                    initialValue: addressArray[0],
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
                                    initialValue: addressArray[1],
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
                                            initialValue: this.state.accountInfo.zipcode,
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
                                    initialValue: this.state.accountInfo.mobile,
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
                    <div className="edit-tip">
                        <p className="edit-asterisk">*</p>
                        <p className="edit-tip-content"> indicates required field</p>
                    </div>
                    <Form.Item>
                        {/*{getFieldDecorator('remember', {*/}
                        {/*    valuePropName: 'checked',*/}
                        {/*    initialValue: true,*/}
                        {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                        {/*<a className="login-form-forgot" href="">*/}
                        {/*    Forgot password*/}
                        {/*</a>*/}
                        <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit" className="edit-profile-save">
                            Save
                         </Button>
                        <Button type="primary" className="edit-profile-cancel"
                            onClick={() => {
                                this.props.history.push('/user/accountInfo');
                            }}>
                            Cancel
                         </Button>

                    </Form.Item>
                </Form>
            </div>
        );
    }

    // test helper function
    // values is the data should be saved
    saveProfile = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { name, email, password, zipcode, mobile, address1, address2, City, State } = values;

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

                console.log(data);
                this.props.actionController.reSubmitProfile(data);
            }

        });
        this.props.history.push('/user/accountInfo'); //when click save button, jump to /user/accountInfo page
    };
}

const AccountInfoEdit = Form.create({ name: "edit-profile" })(EditProfileForm);
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountInfoEdit));
