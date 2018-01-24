import React, { Component } from 'react';

class MapBlock extends Component{
    render(){
        const BlockStyle = {
            position: "absolute",
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
            left: this.props.x,
            bottom: this.props.y
        }
        return(
            <div style={BlockStyle}></div>
        )
    }
}

export default MapBlock;