import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button,Row, Col} from "antd";
import home_img from "../style/image/home_img.png";
import LoginForm from "../components/Login";
import RegisterForm from "../components/Register";
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
                    <Link to="/login">
                        <Button shape="round" style={{ marginRight: '20px' }}>
                            Log In
                        </Button>
                    </Link>

                    <Link to="/signUp">
                        <Button className={"SignUp-button"}
                            // style={{ marginRight: '20px',
                            //     color: '#5E5E5E',
                            //     border: '3px solid #215899',
                            //     font-family: 'Roboto',
                            //     fontstyle: 'normal',
                            //     fontweight: 'bold',
                            //     fontsize: '24px',
                            //     lineheight: '28px',
                            // }}
                        >
                            Sign Up
                        </Button>
                    </Link>

                    {/*<hr />*/}


                       Tracking


                    <Link to="/shipping">
                        Shipping
                    </Link>
                    <Link to="/tracking">
                        <Tracking />
                    </Link>
                    <img src={home_img} className="App-logo" alt="logo" />



                    {/*<RegisterForm />*/}
                    {/*<Tracking />*/}
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