// Author: Dan Li
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import {List, Card } from 'antd';
import { withRouter } from "react-router-dom";

const isLoggedIn = false;
class Credit extends React.Component {

    state = {
        user: { credit: 10 },
    }

    render() {

        return (
            <Card className="creditcard" title={<span className="creditcard-title"> Credit Information </span>} bordered={true}>
                <List class='personalinfo' bordered='false'>
                    <List.Item className="creditcard-content">{'My Current Credit: ' + this.state.user.credit}</List.Item>
                </List>
            </Card>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Credit));
