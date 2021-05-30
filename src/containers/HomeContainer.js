import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import home_img from "../style/image/home_img.svg";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Tracking from "../components/TrackingInput";
import shipping_icon from "../style/image/shipping_icon.svg";
import tracking_icon from "../style/image/tracking_icon.svg";

class HomeContainer extends React.Component {


    render() {
        return (
            <div>

                <img src={tracking_icon} className="tracking-icon" alt="tracking" />
                Tracking
                <Tracking />

                <Link to="/placeOrder">
                    <img src={shipping_icon} className="shipping-icon" alt="shipping" />
                    Shipping
                </Link>

                <img src={home_img} className="home-background" alt="logo" />

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