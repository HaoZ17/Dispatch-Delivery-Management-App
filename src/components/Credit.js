// Author: Dan Li
import { bindActionCreators } from "redux";
import React from 'react'
import { actions } from '../actionCreaters/actionCreater'
import { connect } from "react-redux";
import { List, Card, Breadcrumb } from 'antd';
import { withRouter } from "react-router-dom";
import polygon from '../style/image/polygon.svg';

const isLoggedIn = false;
class Credit extends React.Component {

    state = {
        user: { credit: 10 },
    }

    handleBackHome = ()=>{
        this.isLoggedIn? 
        this.props.history.push("/user") :
        this.props.history.push("/")
      }

    render() {
        this.isLoggedIn = this.props.userInfo===null ? false:true;
        
        return (
            <div>
                <Breadcrumb separator={<img className="credit-polygon" src={polygon} ></img>} className="credit-breadcrumb">
                    <Breadcrumb.Item onClick={this.handleBackHome}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Credit</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="credit-card" title={<span className="credit-card-title"> Credit Information </span>} bordered={true}>
                    <List class='personalinfo' bordered='false'>
                        <List.Item className="credit-card-content">{'My Current Credit: ' + this.state.user.credit}</List.Item>
                    </List>
                </Card>
            </div>
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
