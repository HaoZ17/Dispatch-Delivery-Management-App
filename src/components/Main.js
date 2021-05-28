import React from 'react';
import { Route, Switch } from "react-router";
import AccountInfoEdit from './AccountInfoEdit';
import AccountInfo from './AccountInfo.js';
import Order from './Order';
import User from './User';
import PackageTracking from './PackageTracking';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import HomeContainer from "../containers/HomeContainer";


function Main(props) {


        const showAccountInfoEdit=()=>{
            return(
            <AccountInfoEdit/>
            );
        };

        const showAccountInfo=()=>{
            return(
            <AccountInfo/>
            );
        };

        const showOrder=()=>{
            return(
            <Order/>
            );
        };

        const showPackageTracking=()=>{
            return(
            <PackageTracking/>
            );
        };
        const showLogin=()=>{
            return(
                <LoginContainer />
            );
        };
        const showSignUp=()=>{
            return(
                <SignUpContainer/>
            );
        }
        const showHome=()=>{
            return(
                <HomeContainer/>
            );
        };

    return (
        <div className="main">
            <Switch>
                <Route exact path="/" render={showHome}/>
                <Route exact path="/login" render={showLogin}/>
                <Route exact path="/register" render={showSignUp}/>
                <Route exact path="/user" component={User} />
                <Route exact path="/user/accountInfo/edit" render={showAccountInfoEdit}/>
                <Route exact path="/user/accountInfo" render={showAccountInfo}/>
                <Route exact path="/user/order" render={showOrder}/>
                <Route exact path="/packagetracking" render={showPackageTracking}/>
             </Switch>

        </div>
    );
}

export default Main;