import React from 'react';
import { Route, Switch } from "react-router-dom";
import Father from './Father';
import Child from './Child';

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
    return (
        <div className="main">
            <Switch>
                {/* //examples */}
                <Route exact path="/" render={showFather} />
                <Route exact path="/father" render={showFather} />
                <Route exact path="/child" render={showChild}/>
             </Switch>

        </div>
    );
}

export default Main;