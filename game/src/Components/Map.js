import React, { Component } from 'react';
import MapBlock from "./MapBlock";

class Map extends Component{
    getBlocks(){
        let blockWidth = 5;
        let blockHeight = 5;
        let blockY = 5;
        let mapArray = [];
        for(let i = 0; i <window.innerWidth;i+=blockWidth){
            mapArray.push(<MapBlock key={i} 
                          color={"blue"}
                          width={blockWidth}
                          height={blockHeight}
                          x={i}
                          y={blockY}/>)
        }
         return mapArray;
    }
    render(){
        return(this.getBlocks());            
    }
}

        
export default Map;