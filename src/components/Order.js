/*
Author: Zhao Tang & Dan Li
Verison: May 25, 2021
*/
import { bindActionCreators } from "redux";
import React, { createRef } from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { Tabs, List, Breadcrumb, Menu, Dropdown, Icon, Button } from 'antd';
import { withRouter } from "react-router-dom";

class Order extends React.Component {

    constructor(props) {
        super(props)
    }

    // can be removed
    componentDidUpdate() {
        console.log(1)
    }

    callback = (key) => {
        console.log(key);
    }

    render() {
        const { TabPane } = Tabs;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="">
                        past 3 months
                </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="">
                        past 6 months
                </a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a target="_blank" rel="noopener noreferrer" href="">
                        past 1 year
                </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={()=>{this.props.history.push('/user')}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Order History</Breadcrumb.Item>
                </Breadcrumb>
                <Tabs defaultActiveKey="processing" onChange={this.callback}>
                    <TabPane tab="Processing" key="Processing" style={{ height: '680px', overflow: 'auto' }} forceRender={true}>
                        <p>Orders placed in </p>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                past 3 months <Icon type="down" />
                            </a>
                        </Dropdown>
                        <br />
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={this.props.processing} //replace of "this.props.orderInfor"
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<p>Estimated {item.deliverDate} </p>} // replace of delivered time
                                        description=
                                        {<div>
                                            <p>From: {item.from} </p>
                                            <p>To: {item.to} </p>
                                            <p>To: {item.to} </p>
                                            <p>order weight: {item.orderWeight}</p>
                                            <button onClick={
                                                () => {
                                                    console.log("tracking page")
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }>Track</button>
                                        </div>}
                                    />
                                </List.Item>
                            )}
                        />,
                </TabPane>
                    <TabPane tab="Delivered" key="Delivered" style={{ height: '680px', overflow: 'auto' }} forceRender={true}>
                        {/* orders have Delivered are {this.props.password} */}
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.delivered}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<p>Delivered at {item.deliverDate} </p>}
                                        description=
                                        {<div>
                                            <p>To: {item.name} </p>
                                            <p>order weight: {item.orderWeight}</p>
                                            <Button onClick={
                                                () => {
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }>Track</Button>
                                        </div>}
                                    />
                                </List.Item>
                            )}
                        />,
                </TabPane>
                </Tabs>
            </div>
        )
    }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order));
