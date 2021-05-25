import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {Link} from "react-router-dom";

// const { Search } = Input;

class TrackingInput extends React.Component {
    constructor(props){
        super(props)
        this.trackingRef=new createRef();
    }

    submitLogin=()=>({
        tracking_number: this.trackingRef.current.value
    })

    render() {
        return (
            <>
                <div>
                    <input
                        type={"text"}
                        ref = {this.trackingRef}
                        placeholder={"Please enter your tracking number"}
                    />

                    <Link to="/tracking">
                        <button
                            onClick={()=>{this.props.actionController.inputTrackingNumber(this.submitLogin())}}>
                            Track
                        </button>
                    </Link>
                </div>

            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackingInput);