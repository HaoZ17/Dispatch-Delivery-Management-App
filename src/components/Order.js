// Author: Dan Li
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { Tabs, List, Breadcrumb, Menu, Dropdown, Icon } from 'antd';
import { withRouter } from "react-router-dom";

class Order extends React.Component {

    // test data, should get data from store latter
    // since delivered/estimate deliver time and other basic info are not stored together,
    // my current data structure is not accurate, we can change this part of code latter after discussion with backend
    state = {
        processing: [{from: "local", to:"future",size: "50m^3m", orderWeight: "10 pounds", shipTime:"2021-05-21-12:21", deliverTime:"2021-05-27-12:21"},
        {from: "company", to:"home",size: "100m^2m", orderWeight: "40 pounds", shipTime:"1999-05-21-12:21", deliverTime:"1999-05-23-12:21"},
        {from: "china", to:"USA",size: "2000m^400m", orderWeight: "8 pounds", shipTime:"200-05-21-12:21", deliverTime:"1999-05-24-12:21"}],
        delivered: [{from: "santa clara", to:"san cruz",size: "50inch^3inch", orderWeight: "10 kg", shipTime:"2000-05-21-12:21", deliverTime:"1999-05-22-12:21"},
        {from: "east", to:"west",size: "110inch^8inch", orderWeight: "1600kg", shipTime:"2015-05-21-12:21", deliverTime:"1999-05-25-12:21"},
        {from: "japan", to:"korea",size: "90inch^7inch", orderWeight: "9 kg", shipTime:"2019-05-21-12:21", deliverTime:"1999-05-27-12:21"}],
    };

    // callback function when changing tabs(Processing or Delivered)
    // can be removed if we do not need this function
    callback = (key) => {
        console.log(key);
    }

    render() {
        const { TabPane } = Tabs;

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
                    <Breadcrumb.Item onClick={() => { this.props.history.push('/user') }}>Home</Breadcrumb.Item>
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
                            dataSource={this.state.processing} //replace data from store
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
                            dataSource={this.state.delivered} // replace of delivered time
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