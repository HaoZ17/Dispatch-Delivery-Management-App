import React, {Component} from 'react';

class NavLine extends Component {
    render() {
        return (
            <div>
                <rect style = {{position: "absolute",
                                display: "flex",
                                width: "100%",
                                height: "2px",
                                left: "0px",
                                top: "80px",
                                background: "#215899",}}> </rect>
            </div>
        );
    }
}
export default NavLine;
