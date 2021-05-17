import { bindActionCreators } from "redux";
import React, { createRef } from 'react'
import {actions} from './actionCreaters/actionCreater'
import { connect } from "react-redux";

class Test extends React.Component {

    constructor(props){
        super(props)
        this.emailRef=new createRef();
        this.passCodeRef= new createRef();
    }

    submitLogin=()=>({
        email: this.emailRef.current.value,
        password: this.passCodeRef.current.value
    })

    render() {
        return (
            <div>
                <input type="text" ref={this.emailRef} placeholder="email" />
                <input type="password" ref={this.passCodeRef} placeholder="Password"/>
                <button onClick={()=>{this.props.actionController.loginInfo(this.submitLogin())}}>submit</button>
                <button onClick={this.props.actionController.signInRequest}>SendRequest</button>
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