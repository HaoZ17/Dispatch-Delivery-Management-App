import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {withRouter} from "react-router-dom";
import { Input, Icon } from 'antd';


class TrackingInputOnHome extends React.Component {

    constructor(props) {
        super(props)
        this.trackingInputRef=new createRef();
        this.state = {
            loading: false
        }
    }

    waitfunc=async(data) => {
        // this.props.clearEmptyInput();
        this.setState({loading: true});
        this.props.actionController.resetResult();
        await this.props.actionController.trackOrder(data);
        if(this.props.trackingResult){
            this.setState({loading: false});
            this.props.history.push("/packagetracking");
        }else {
            this.setState({loading: false});
        }
    }

    render() {


        const onClickSearch = () => {
            let trackingNum = this.trackingInputRef.current.state.value;

            if (trackingNum === undefined || trackingNum === "") {
                this.props.onEmptyInput();
                return;
            } else {
                let trackingNumString = trackingNum.toString();
                this.waitfunc(trackingNumString);
            }
        }

        const suffix = this.state.loading ?
            <Icon
                type="loading"
                style={{ fontSize: '30px' }}
            />
            :
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
