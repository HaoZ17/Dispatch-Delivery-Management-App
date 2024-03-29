import React, { createRef } from 'react'
import { bindActionCreators } from "redux";
import {actions} from './actionCreaters/actionCreater'
import { connect } from "react-redux";

import SignUpContainer from "./containers/SignUpContainer"
import HomeContainer from "./containers/HomeContainer"
import LoginContainer from "./containers/LoginContainer"
import Status1 from "./components/Status1";
import Status2 from './components/Status2';
import OrderForm from "./containers/InputOrderForm";

import TopBar from './components/TopBar';
import Main from './components/Main';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class Test extends React.Component {

    constructor(props){
        super(props)
        this.emailRef=new createRef();
        this.passCodeRef= new createRef();
        this.trackingNumber=new createRef();
        this.state={
          input:""
        }
    }
    onChangeEvent=(value)=>{
      this.setState({input:value})
    }


    render() {
        return (
            <div>
              <div className="App">
                <TopBar></TopBar>
                <Main></Main>
              </div>
                {/* <div>
                  <button onClick={()=>{console.log(this.props.trackingNumber)}}>trackingNumber</button>
                  <button onClick={()=>{console.log(this.props.email)}}>UserEmail</button>
                  <button onClick={()=>{console.log(this.props.userInfo)}}>userInfo</button>
                  <button onClick={()=>{console.log(this.props.registerStatus)}}>registerStatus</button>
                  <button onClick={()=>{console.log(this.props.trackingInfo)}}>trackingInfo</button>
                  <button onClick={()=>{console.log(this.props.orderInfo)}}>orderInfo</button>
                  <button onClick={()=>{console.log(this.props.checkoutInfo)}}>checkoutInfo</button>
                  <button onClick={()=>{console.log(this.props.options)}}>options</button>
                  
                  <button onClick={()=>{this.props.actionController.trackMemberOrder()}}>trackMemberOrder</button>
                  <button onClick={()=>{this.props.actionController.placeOrder()}}>placeOrder</button>
                  <button onClick={()=>{this.props.actionController.confirmOption()}}>trackingOrder</button>
                </div>
                <div>
                  <input type="text" onChange={(e)=>{this.onChangeEvent(e.target.value)}}/>
                  <button onClick={()=>{this.props.actionController.trackOrder(this.state.input)}}>search</button>
                </div> */}
                {/* <input type="text" ref={this.emailRef} placeholder="email" />
                <input type="password" ref={this.passCodeRef} placeholder="Password"/>
                <button onClick={()=>{this.props.actionController.loginInfo(this.submitLogin())}}>submit</button>
                <button onClick={this.props.actionController.signInRequest}>SendRequest</button>
                <br/>
                <p>Tracking function</p>
                <input type="text" ref={this.trackingNumber} placeholder="tracking number" onBlur={()=>this.props.actionController.inputTrackingNumber(this.trackingNumber.current.value)}/>
                <button onClick={this.props.actionController.trackOrder}>Track</button>
                <button onClick={this.props.actionController.trackMemberOrder}>trackingUserPackageCheck</button>
                <br/>
                <br/>
                <button onClick={this.props.actionController.isshowRegForm}>click</button>
                {this.props.showRegForm? <p>on</p>:<p>off</p>}
                <br/>
                <button onClick={this.props.actionController.registUser}>SignUpCheck</button>
                <br/>
                <br/>
                <button onClick={this.props.actionController.placeOrder}>placeOrderCheck</button>
                <br/>
                <br/>
                <button onClick={this.props.actionController.confirmOption}>checkOutCheck</button>
                <br/>
                <br/>
                <button onClick={this.props.actionController.jumptest}>JUMP</button>
                {this.props.jumpTest? <Status1/>:<Status2/>
                } */}
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Test);