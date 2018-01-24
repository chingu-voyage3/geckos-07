import React, { Component } from 'react';

class Player extends Component{
    render(){
        const PlayerStyle = {
            position: "absolute",
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
            left: this.props.x,
            bottom: this.props.y
        }
        return(
            <div style={PlayerStyle}></div>
        );
    }
}

export default Player;