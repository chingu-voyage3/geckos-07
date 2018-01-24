import React, { Component } from 'react';

class Baddie extends Component{
    render(){
        const BaddieStyle = {
            position: "absolute",
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
            left: this.props.x,
            bottom: this.props.y
    }
        return(
            <div style={BaddieStyle}></div>
        );
    }
}

export default Baddie