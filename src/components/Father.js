import React from 'react';
import { withRouter } from "react-router-dom";

function Father(props) {
   
    const handleClick=()=>{
        props.history.push('/child');
    }


    return (
        <div>
            this is father
            <button onClick={handleClick}>go to child</button>
        </div>
    );
}

export default withRouter(Father);