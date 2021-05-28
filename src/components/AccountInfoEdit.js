// author: Dan Li
import { Form, Button, Input, Breadcrumb } from 'antd';
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class EditProfileForm extends React.Component {

    // test data, should get data from store latter
    state = {
        accountInfo: this.props.userInfo,

        orderData: null
    };

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

        return (
            <div>
                {/* Home > MyProfile*/}
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user') }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user/accountInfo') }}>My Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
                </Breadcrumb>

                {/* profile edit form */}
                <Form
                    {...formItemLayout}
                    className="edit-profile"
                    onSubmit={this.saveProfile} // call helper function to save profile
                >
                    <Form.Item label="Name">
                        {getFieldDecorator("name", {
                            initialValue: this.state.accountInfo.name, //replace data from store
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Email">
                        {getFieldDecorator("email", {
                            initialValue: this.state.accountInfo.email, //replace data from store
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Password">
                        {getFieldDecorator("password", {
                            initialValue: this.state.accountInfo.password, //replace data from store
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Address">
                        {getFieldDecorator("address", {
                            initialValue: this.state.accountInfo.address, //replace data from store
                            rules: [{ required: false }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Zipcode">
                        {getFieldDecorator("zipcode", {
                            initialValue: this.state.accountInfo.zipcode, //replace data from store
                            rules: [{ required: false }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>

                    <Form.Item label="Mobile">
                        {getFieldDecorator("mobile", {
                            initialValue: this.state.accountInfo.mobile, //replace data from store
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

    // test helper function 
    // values is the data should be saved
    saveProfile = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values); 
            this.props.actionController.reSubmitProfile(values);
            if (!err) {
                console.log(1);
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
