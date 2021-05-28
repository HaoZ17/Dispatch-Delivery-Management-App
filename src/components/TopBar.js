import {Button,Menu, Dropdown} from 'antd';
import { CaretDownOutlined,UserOutlined } from '@ant-design/icons';

import React, { createRef } from 'react'
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";

import {withRouter} from "react-router-dom";
import TrackingInput from "./TrackingInput";

class TopBar extends React.Component {
    //const isLoggedIn = props.userInfo ? true:false;
    isLoggedIn = false;

    handleLogout=()=>{
        console.log("log out successfully");
    }

    handleClickLogin=()=>{
        this.props.history.push("/login");
    }
     handleClickSignup=()=>{
        this.props.history.push("/register");
    }
    menu = (
        <Menu>
          <Menu.Item>
            <a rel="noopener noreferrer" href="/user/accountInfo">
              Profile Overview
            </a>
          </Menu.Item>
          <Menu.Item>
            <a  rel="noopener noreferrer" href="/user/order">
              Order History
            </a>
          </Menu.Item>
          <Menu.Item>
            
              Credit
            
          </Menu.Item>
          <Menu.Item>
            <a  rel="noopener noreferrer" onClick={this.handleLogout}>
              Log out
            </a>
          </Menu.Item>
        </Menu>
      );
    render(){
        return (
            <header className="Topbar">
                <TrackingInput/>

            {   this.isLoggedIn ?
                       <div>
                       <UserOutlined style={{color:"#215899"}}/>
                       <Dropdown overlay={this.menu}>
                           <a className="topbar-dropdown-link" onClick={e => e.preventDefault()}>
                           User <CaretDownOutlined style={{color:"#215899"}}/>
                           </a>
                       </Dropdown>
                      </div>
                    :
                    <div>
                         <Button className= "login-btn" onClick={this.handleClickLogin}>Login</Button>
                        <Button className="signup-btn" onClick={this.handleClickSignup}>Sign up</Button>
                    </div>
                   
            }  
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