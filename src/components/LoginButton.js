import React, {Component} from 'react';
import {Button} from "antd";

class LoginButton extends Component {
    render() {
        return (
            <>
                <Button shape="round" style={{ marginRight: '20px' }}>
                    Log In
                </Button>
            </>
        );
    }
}

export default LoginButton;