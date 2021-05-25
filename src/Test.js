import { bindActionCreators } from "redux";
import React, { createRef } from 'react'
import {actions} from './actionCreaters/actionCreater'
import { connect } from "react-redux";
import SignUpContainer from "./containers/SignUpContainer"
import HomeContainer from "./containers/HomeContainer"
import LoginContainer from "./containers/LoginContainer"
import NavBar from "./components/NavBar"


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class Test extends React.Component {

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