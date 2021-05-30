import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button} from "antd";
import home_img from "../style/image/home_img.svg";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Tracking from "../components/TrackingInput";
import LoginButton from "../components/LoginButton";
import SignUpButton from "../components/SignUpButton";
import shipping_icon from "../style/image/shipping_icon.svg";
import tracking_icon from "../style/image/tracking_icon.svg";

class HomeContainer extends React.Component {


    render() {
        return (
            <div>

                { Object.keys(this.props.signIn).length === 0 ?
                    <div>
                        <Link to="/login">
                            <LoginButton />
                        </Link>

                        <Link to="/signUp">
                            <SignUpButton />
                        </Link>
                    </div>
                :
                    // User icon
                    null
                }



                <img src={tracking_icon} className="tracking-icon" alt="tracking" />
                Tracking
                <Tracking />

                <Link to="/shipping">
                    <img src={shipping_icon} className="shipping-icon" alt="shipping" />
                    Shipping
                </Link>

                <img src={home_img} className="home-background" alt="logo" />
                {/*<b> SMART EXPRESS</b>*/}

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

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);