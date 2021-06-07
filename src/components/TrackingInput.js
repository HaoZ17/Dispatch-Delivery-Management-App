import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {withRouter} from "react-router-dom";
import {Icon, Input} from 'antd';


class TrackingInput extends React.Component {

    constructor(props) {
        super(props)
        this.trackingInputRef=new createRef();
        this.state = {
            error: "",
            loading: false
        }
    }

    waitfunc=async(data) => {
        this.setState({error: ""});
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
                this.setState({
                    error: "Please input your tracking number!"
                })
                return;
            } else {
                this.setState({
                    error: ""
                })
                // console.log(trackingNum);
                this.waitfunc(trackingNum);
            }

        }

        const suffix = this.state.loading ?
            <Icon
                type="loading"
                style={{ fontSize: '14px' }}
            />
            :
            <Icon
                type="search"
                style={{ fontSize: '14px' }}
                onClick={onClickSearch}
            />

        return (

            <div className="tracking-input">
                <Input
                    placeholder="Please enter your tracking number"
                    suffix={suffix}
                    ref={this.trackingInputRef}
                />

                <div className="error-msg-top-bar">{this.state.error}</div>

            </div>
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