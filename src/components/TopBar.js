import { Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons';

import React, { createRef } from 'react'
import { bindActionCreators } from "redux";
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import TrackingInput from "./TrackingInput";

import tracking_icon from "../style/image/tracking_icon.svg";

class TopBar extends React.Component {
  //isLoggedIn = false;

  // handleLogout=()=>{
  //     console.log("log out successfully");
  // }

  handleClickLogin = () => {
    this.props.history.push("/login");
  }
  handleClickSignup = () => {
    this.props.history.push("/register");
  }


  render() {
    const isLoggedIn = this.props.userInfo === null ? false : true;
    const isTrackingDisplay = this.props.location.pathname === "/" || this.props.location.pathname === "/user" ? false : true;
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={()=>{
            this.props.history.push("/user/accountInfo");
          }}>
            Profile Overview
                </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={async()=>{
           // await this.props.actionController.trackMemberOrder();
              if(this.props.orderHistory!==null){
                this.props.history.push("/user/order");
              }
          }}>
            Order History
                </a>
        </Menu.Item>
        <Menu.Item>
            Credit : {this.props.userInfo===null ? 0 : this.props.userInfo.credit}
              </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer"
            onClick={() => {
              this.props.actionController.signOut();
              this.props.history.push("/");
            }

            }>
            Log out
                </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <header className="Topbar">
        {
          isTrackingDisplay ? 
          <div className="topbar-tracking">
            <p>Tracking</p>
            <TrackingInput />
          </div>
           : 
          null
        }

        
        <div className="topbar-login-group">
        {   isLoggedIn ?
          <div>
            <UserOutlined style={{ color: "#215899",fontSize:"20px" }} />
            <Dropdown overlay={menu}>
              <a className="topbar-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize:"large",marginLeft:"10px",marginRight:"10px"}}>
                User <CaretDownOutlined style={{ color: "#215899",fontSize:"20px" }} />
              </a>
            </Dropdown>
          </div>
          :
          <div>
             <UserOutlined style={{ color: "#215899",fontSize:"20px" }} />
            <Button className="login-btn" onClick={this.handleClickLogin} size="large">Login</Button>
            <Button className="signup-btn" onClick={this.handleClickSignup} size="large">Sign up</Button>
          </div>
        }
        </div>
          

        
      </header>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));