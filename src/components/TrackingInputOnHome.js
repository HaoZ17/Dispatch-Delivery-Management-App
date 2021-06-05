import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {withRouter} from "react-router-dom";
import { Input, Icon } from 'antd';

// const { Search } = Input;


class TrackingInputOnHome extends React.Component {

    constructor(props) {
        super(props)
        this.trackingInputRef=new createRef();
    }

    render() {

        const onClickSearch = () => {
            let trackingNum = this.trackingInputRef.current.state.value;

            if (trackingNum === undefined) {
                this.props.onEmptyInput();
                return;
            }

            let trackingNumString = trackingNum.toString();
            // console.log(trackingNumString)
            // this.props.actionController.inputTrackingNumber(trackingNumString)
            this.props.actionController.trackOrder(trackingNumString);
            this.props.history.push("/packagetracking")
        }

        const suffix =
            <Icon
                type="search"
                style={{ fontSize: '30px' }}
                onClick={onClickSearch}
             />

        return (
            <>
                <div>
                    <Input
                        id = "tracking-input-home"
                        placeholder="Please enter your tracking number"
                        suffix={suffix}
                        ref={this.trackingInputRef}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrackingInputOnHome));