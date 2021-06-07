// Author: Dan Li
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { Tabs, List, Breadcrumb, Menu, Dropdown, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import polygon from '../style/image/polygon.svg';

const isLoggedIn=false;
class Order extends React.Component {


    // callback function when changing tabs(Processing or Delivered)
    // can be removed if we do not need this function
    callback = (key) => {
        console.log(key);
    }

    handleBackHome = ()=>{
        this.isLoggedIn? 
        this.props.history.push("/user") :
        this.props.history.push("/")
      }

    render() {
        const { TabPane } = Tabs;
        this.isLoggedIn = this.props.userInfo===null ? false:true;
        //advanced feature: dropdown menu for orders from recent 3/6 months or 1 year
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_self" rel="noopener noreferrer" href="">
                        past 3 months
                </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_self" rel="noopener noreferrer" href="">
                        past 6 months
                </a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a target="_self" rel="noopener noreferrer" href="">
                        past 1 year
                </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                {/* Home > MyProfile*/}
                <Breadcrumb separator={<img className="order-polygon" src={polygon} ></img>} className="order-breadcrumb">
                    <Breadcrumb.Item onClick={this.handleBackHome}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Order History</Breadcrumb.Item>
                </Breadcrumb>

                {/* two tabs: Processing and Delivered */}

                {this.props.orderHistory===null?
                <p>You don't have any order</p>:
                    <Tabs className="order-tab" defaultActiveKey="processing" onChange={this.callback}>
                    <TabPane tab="Processing" key="Processing" style={{ height: '680px', overflow: 'auto' }} forceRender={true}>

                        {/* advanced feature: dropdown menu for orders from recent 3/6 months or 1 year */}
                        <p className="order-text">Orders placed in </p>
                        <Dropdown className="order-dropdown" overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                past 3 months <Icon type="down" />
                            </a>
                        </Dropdown>

                        {/* order list */}
                    
                        <List
                            className="order-list"
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={this.props.orderHistory.pending.pending} //replace data from store
                            renderItem={item => (
                                <List.Item className="order-list-item">
                                    <List.Item.Meta
                                        title={<p className="order-list-item-title">Estimated {item.arriveTime} </p>} // replace of delivered time
                                        description=
                                        {<div className="order-list-item-description">
                                            <p>From: {item.senderAddress} </p> 
                                            <p>To: {item.receiverAddress} </p>
                                            <p>Size: {item.size} </p>
                                            <p>Weight: {item.weight}</p>
                                            <p>Ship time: {item.createTime}</p>
                                            <button className="order-list-item-button" onClick={
                                                async() => {
                                                    console.log(item.trackingNumber);
                                                    await this.props.actionController.trackOrder(item.trackingNumber)
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }>Track</button>
                                        </div>}
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>
                    <TabPane tab="Delivered" key="Delivered" style={{ height: '680px', overflow: 'auto' }} forceRender={true}>

                        {/* advanced feature: dropdown menu for orders from recent 3/6 months or 1 year */}
                        <p className="order-text">Orders placed in </p>
                        <Dropdown className="order-dropdown" overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                past 3 months <Icon type="down" />
                            </a>
                        </Dropdown>

                        {/* order list */}
                        <List
                            className="order-list"
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={this.props.orderHistory.completed.completed} // replace of delivered time
                            renderItem={item => (
                                <List.Item className="order-list-item">
                                    <List.Item.Meta
                                        title={<p className="order-list-item-title">Delivered at {item.arriveTime} </p>} // replace of delivered time
                                        description=
                                        {<div className="order-list-item-description">
                                            <p>From: {item.senderAddress} </p>
                                            <p>To: {item.receiverAddress} </p>
                                            <p>Size: {item.size} </p>
                                            <p>Weight: {item.weight}</p>
                                            <p>Ship time: {item.createTime}</p>
                                            <button className="order-list-item-button" onClick={
                                                async() => {
                                                    console.log(item.trackingNumber);
                                                    await this.props.actionController.trackOrder(item.trackingNumber)
                                                    this.props.history.push('/packagetracking')
                                                }
                                            }>Track</button>
                                        </div>}
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>
                    </Tabs>
                }
                
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

