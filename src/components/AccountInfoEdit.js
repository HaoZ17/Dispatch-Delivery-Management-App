/*
Author: Zhao Tang & Dan Li
Version: May 25, 2021
*/
import { Form, Button, Input, Breadcrumb } from 'antd';
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";


class EditProfileForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 13 }
            }
        };
        // const handleSave=()=>{
        //     history.push('/child');
        // };

        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={()=>{this.props.history.push('/user')}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{this.props.history.push('/user/accountInfo')}}>My Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
                </Breadcrumb>
                <Form
                    {...formItemLayout}
                    className="edit-profile"
                    onSubmit={this.saveProfile}
                >
                    <Form.Item label="Name">
                        {getFieldDecorator("name", {
                            initialValue: this.props.user.name,
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Email">
                        {getFieldDecorator("email", {
                            initialValue: this.props.user.email,
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Password">
                        {getFieldDecorator("password", {
                            initialValue: this.props.user.password,
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Address">
                        {getFieldDecorator("address", {
                            initialValue: this.props.user.address,
                            rules: [{ required: false }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Zipcode">
                        {getFieldDecorator("zipcode", {
                            initialValue: this.props.user.zipcode,
                            rules: [{ required: false }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Mobile">
                        {getFieldDecorator("mobile", {
                            initialValue: this.props.user.mobile,
                            rules: [{ required: false }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <p> * indicates required field</p>
                    <Form.Item className="edit-profile-save">
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ textAlign: "center" }}
                            onClick={()=>{this.props.history.push('/user/accountInfo')}}
                        >
                            Save
                    </Button>
                        <Button
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

    saveProfile = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                console.log(1);
            }
        });
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
