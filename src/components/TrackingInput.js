import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {withRouter} from "react-router-dom";
import { Input } from 'antd';

const { Search } = Input;

class TrackingInput extends React.Component {

    constructor(props){
        super(props)
        // this.trackingRef=new createRef();
        this.state = {
            error: ""
        }
    }

    // submitLogin=()=>({
    //     tracking_number: this.trackingRef.current.value
    // })

    render() {

        const onClickSearch = ( value ) => {
            if (value === "") {
                this.setState({
                    error: "Please input your tracking number!"
                })
                return;
            }
            this.props.actionController.inputTrackingNumber(value)
            this.props.history.push("/packagetracking")
        }

        return (
            <>
                <div>

                    <Search
                        placeholder="Please enter your tracking number"
                        onSearch={onClickSearch}
                        style={{ width: 200 }}
                    />

                    {/*<input*/}
                    {/*    type={"text"}*/}
                    {/*    ref = {this.trackingRef}*/}
                    {/*    placeholder={"Please enter your tracking number"}*/}
                    {/*/>*/}

                    {/*<Link to="/packagetracking">*/}
                    {/*    <button*/}
                    {/*        onClick={()=>{this.props.actionController.inputTrackingNumber(this.submitLogin())}}>*/}
                    {/*        Track*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                </div>
                <div className="error-msg">{this.state.error}</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrackingInput));