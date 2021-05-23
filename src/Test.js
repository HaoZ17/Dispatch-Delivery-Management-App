import { bindActionCreators } from "redux";
import React, { createRef } from 'react'
import {actions} from './actionCreaters/actionCreater'
import { connect } from "react-redux";
import LoginForm from "./components/Login"
import RegisterForm from "./components/Register"
import Tracking from "./components/Tracking"
import home_img from "./style/image/home_img.png"
import HomeContainer from "./containers/HomeContainer"
import NavLine from "./components/NavLine"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import {Button} from "antd";

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
            <Router>
            <div>
                {/*<input type="text" ref={this.emailRef} placeholder="email" />*/}
                {/*<input type="password" ref={this.passCodeRef} placeholder="Password"/>*/}
                {/*<button onClick={()=>{this.props.actionController.loginInfo(this.submitLogin())}}>submit</button>*/}
                {/*<button onClick={this.props.actionController.signInRequest}>SendRequest</button>*/}
                {/*<Link to="/login">*/}
                {/*    <Button shape="round" style={{ marginRight: '20px' }}>*/}
                {/*        Log In*/}
                {/*    </Button>*/}
                {/*</Link>*/}

                {/*<Link to="/register">*/}
                {/*    <Button shape="round" style={{ marginRight: '20px' }}>*/}
                {/*        Sign Up*/}
                {/*    </Button>*/}
                {/*</Link>*/}

                {/*<hr />*/}

                {/*<img src={home_img} className="App-logo" alt="logo" />*/}

                <NavLine />

                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/signUp">
                        <RegisterForm />
                    </Route>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
                {/*<HomeContainer />*/}

                {/*<RegisterForm />*/}
                {/*<Tracking />*/}
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