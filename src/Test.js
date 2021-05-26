import React, { createRef } from 'react'
import { bindActionCreators } from "redux";
import {actions} from './actionCreaters/actionCreater'
import { connect } from "react-redux";

import SignUpContainer from "./containers/SignUpContainer"
import HomeContainer from "./containers/HomeContainer"
import LoginContainer from "./containers/LoginContainer"
import NavBar from "./components/NavBar"
import Status1 from "./components/Status1";
import Status2 from './components/Status2';
import OrderF from "./containers/InputOrderForm";

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
    }

    // constructor(props){
    //     super(props)
    //     this.emailRef=new createRef();
    //     this.passCodeRef= new createRef();
    // }
    //
    // submitLogin=()=>({
    //     email: this.emailRef.current.value,
    //     password: this.passCodeRef.current.value
    // })

    render() {
        return (
            <Router>
            <div>

                <NavBar />

                <Switch>
                    <Route path="/login">
                        <LoginContainer />
                    </Route>
                    <Route path="/signUp">
                        <SignUpContainer />
                    </Route>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
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
                <OrderF/>
            </div>
            </Router>
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