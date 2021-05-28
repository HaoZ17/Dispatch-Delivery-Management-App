// Author: Dan Li
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { Tabs, List, Breadcrumb, Menu, Dropdown, Icon } from 'antd';
import { withRouter } from "react-router-dom";

const isLoggedIn=false;
class Order extends React.Component {

    // test data, should get data from store latter
    // since delivered/estimate deliver time and other basic info are not stored together,
    // my current data structure is not accurate, we can change this part of code latter after discussion with backend


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
                {/* Home > MyProfile*/}
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={this.handleBackHome}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Order History</Breadcrumb.Item>
                </Breadcrumb>

                {/* two tabs: Processing and Delivered */}
                <Tabs defaultActiveKey="processing" onChange={this.callback}>
                    <TabPane tab="Processing" key="Processing" style={{ height: '680px', overflow: 'auto' }} forceRender={true}>

                        {/* advanced feature: dropdown menu for orders from recent 3/6 months or 1 year */}
                        <p>Orders placed in </p>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                past 3 months <Icon type="down" />
                            </a>
                        </Dropdown>
                        <br />

                        {/* order list */}
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={this.props.processing} //replace data from store
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<p>Estimated {item.deliverTime} </p>} // replace of delivered time
                                        description=
                                        {<div>
                                            <p>From: {item.from} </p> 
                                            <p>To: {item.to} </p>
                                            <p>Size: {item.size} </p>
                                            <p>Weight: {item.weight}</p>
                                            <p>Ship time: {item.shipTime}</p>
                                            <button onClick={
                                                () => {
                                                    // here we need to pass the tracking log data of this order to "/packagetracking" page
                                                    // we can set a global variable(stored in reducer.js) with tracking log infor of this order at this moment
                                                    // so that when jumping to "/packagetracking" page, that page can get data from this global variable
                                                    // since the tracking log data structure has not determined by backend team, I did not implement this step here
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
                        <p>Orders placed in </p>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                past 3 months <Icon type="down" />
                            </a>
                        </Dropdown>

                        {/* order list */}
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.delivered} // replace of delivered time
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<p>Delivered at {item.deliverTime} </p>} // replace of delivered time
                                        description=
                                        {<div>
                                            <p>From: {item.from} </p>
                                            <p>To: {item.to} </p>
                                            <p>Size: {item.size} </p>
                                            <p>Weight: {item.weight}</p>
                                            <p>Ship time: {item.shipTime}</p>
                                            <button onClick={
                                                () => {
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
