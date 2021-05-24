import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';

// const { Search } = Input;

class Tracking extends React.Component {
    constructor(props){
        super(props)
        this.trackingRef=new createRef();
    }

    submitLogin=()=>({
        trackingNumber: this.trackingRef.current.value
    })

    render() {
        return (
            <>
                <div>
                    {/*<Search*/}
                    {/*    placeholder="Please enter your tracking number"*/}
                    {/*    enterButton="Track"*/}
                    {/*    size="large"*/}
                    {/*    onSearch={value => console.log(value)}*/}
                    {/*/>*/}
                    {/*<Search placeholder="input search loading with enterButton" loading enterButton />*/}
                    <input
                        type={"text"}
                        ref = {this.trackingRef}
                        placeholder={"Please enter your tracking number"}
                    />

                </div>

                <div>
                    <button
                        onClick={()=>{this.props.actionController.inputTrackingNumber(this.submitLogin())}}>
                        Track
                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);