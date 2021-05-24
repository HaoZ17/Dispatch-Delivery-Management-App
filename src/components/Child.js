import React from 'react';
import { withRouter } from "react-router-dom";

function Child(props) {
    const handleClick=()=>{
        props.history.push('/father');
    }
    return (
        <div>
            this is child
            <button onClick={handleClick}>go to father</button>
        </div>
    );
}

export default withRouter(Child);