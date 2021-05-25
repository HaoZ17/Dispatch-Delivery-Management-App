import React from 'react';
import { Route, Switch } from "react-router-dom";
import Father from './Father';
import Child from './Child';
import AccountInfoEdit from './AccountInfoEdit';
import AccountInfo from './AccountInfo.js';
import Order from './Order';
import User from './User';
import PackageTracking from './PackageTracking';


function Main(props) {

      //examples
        const showFather=()=>{
            return(
            <Father/>
            );
        };

        const showChild=()=>{
            return(
            <Child/>
            );
        };

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

    return (
        <div className="main">
            <Switch>
                {/* //examples */}
                <Route exact path="/user" component={User} />
                <Route exact path="/father" render={showFather} />
                <Route exact path="/child" render={showChild}/>
                <Route exact path="/user/accountInfo/edit" render={showAccountInfoEdit}/>
                <Route exact path="/user/accountInfo" render={showAccountInfo}/>
                <Route exact path="/user/order" render={showOrder}/>
                <Route exact path="/packagetracking" render={showPackageTracking}/>
             </Switch>

        </div>
    );
}

export default Main;