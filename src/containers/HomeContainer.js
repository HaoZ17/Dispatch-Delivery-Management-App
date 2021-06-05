import React from 'react';
import {Link} from "react-router-dom";
import home_img from "../style/image/home_img.svg";
import {bindActionCreators} from "redux";
import {actions} from "../actionCreaters/actionCreater";
import {connect} from "react-redux";
import TrackingOnHome from "../components/TrackingInputOnHome";
import shipping_icon from "../style/image/shipping_icon.svg";
import tracking_icon from "../style/image/tracking_icon.svg";

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)
        // this.trackingRef=new createRef();
        this.state = {
            error: ""
        }
    }

    handleEmptyInput = () => {
        this.setState({
            error: "Please input your tracking number!"
        })
    };

    clearEmptyInput = () => {
        this.setState({
            error: ""
        })
    };

    render() {
        return (
            <div>
                <div className="row-outer-box">
                    <div className="row">

                        <img src={tracking_icon} className="tracking-icon" alt="tracking" />



                        <p className="tracking-text"> Tracking</p>

                        <TrackingOnHome
                            className="tracking-input"
                            onEmptyInput = {this.handleEmptyInput}
                            clearEmptyInput = {this.clearEmptyInput}
                        />


                        <Link to="/placeOrder">
                            <img src={shipping_icon} className="shipping-icon" alt="shipping" />
                        </Link>

                        <Link to="/placeOrder">
                            <p className="shipping-text"> Shipping</p>
                        </Link>

                    </div>
                </div>

                <div className="error-msg">{this.state.error}</div>

                <div className="home-background">
                    <img src={home_img}  alt="logo" />
                    <b className='SMA'>SMA</b>
                    <b className='RT'>RT</b>
                    <b className='EXPRESS'>EXPRESS</b>
                </div>
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