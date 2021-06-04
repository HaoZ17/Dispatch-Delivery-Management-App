import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import React, {createRef} from 'react';
import {withRouter} from "react-router-dom";
import { Input } from 'antd';

const { Search } = Input;


class TrackingInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: ""
        }
    }


    render() {

        const onClickSearch = (value) => {
            if (value === "") {
                this.setState({
                    error: "Please input your tracking number!"
                })
                return;
            }
            this.setState({
                error: ""
            })
            let trackingNumString = value.toString()
            this.props.actionController.inputTrackingNumber(trackingNumString)
            this.props.history.push("/packagetracking")
        }

        return (

                <div>
                    <Search
                        placeholder="Please enter your tracking number"
                        onSearch={onClickSearch}
                        // style={{
                        //     fontSize: '30px',
                        //     width: '522px',
                        //     height: '60px',
                        //     border: '2px solid #5E5E5E',
                        //     borderRadius: '12px',
                        //     boxSizing: 'border-box',
                        //     marginLeft: '14px',
                        //     fontSizeAdjust:'24px',
                        // }}
                    />


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