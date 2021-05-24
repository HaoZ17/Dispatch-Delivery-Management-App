import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button} from "antd";
import home_img from "../style/image/home_img.svg";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Tracking from "../components/Tracking";

class HomeContainer extends React.Component {


    render() {
        return (
            <Router>
                <div>

                    { Object.keys(this.props.signIn).length === 0 ?
                        <div>
                            <Link to="/login">
                                <Button shape="round" style={{ marginRight: '20px' }}>
                                    Log In
                                </Button>
                            </Link>

                            <Link to="/signUp">
                                <Button className={"signUp-button"}>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    :
                        // User icon
                        null
                    }

                    <Link to="/shipping">
                        Shipping
                    </Link>

                    Tracking
                    <Link to="/tracking">
                        <Tracking />
                    </Link>

                    <img src={home_img} className="home-background" alt="logo" />

                </div>
            </Router>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));