import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import user from "../style/image/user_profile.svg";

class NavBar extends Component {
    render() {
        return (
            <div>
                <rect className="nav-line"> </rect>
                <img src={user} className="user-profile-img" alt="user"/>

            </div>
        );
    }
}
export default NavBar;
