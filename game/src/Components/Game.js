import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";
import Map from './Map';
import Player from './Player';
import Baddie from './Baddie';

class Game extends Component{
    constructor(){
        super();
        this.state={score:0,
                    player:{y:10},
                    baddie:{x:window.innerWidth-50}              
    };
        //this.gameClock();
    }
    gameClock(){
      var clock = setInterval(()=>{
          var baddie = this.state.baddie;
          baddie.x -= window.innerWidth/100;
          this.jumpCheck();
          this.isGameOver();
          this.setState({baddie})
      },20)
    }
    jumpCheck(){
        if(this.state.player.jump === 1){
            if(this.state.player.y < 40){
                let player = this.state.player;
                player.y++;
                this.setState({player});
            }else if(this.state.player.y === 40){
                let player = this.state.player;
                    player.jump = 2;
                     this.setState({player});
                     }
        }else if(this.state.player.jump === 2){
            if(this.state.player.y > 10){
                let player = this.state.player;
                player.y--;
                this.setState({player});
            }else{
                let player = this.state.player;
                player.jump = 0; 
                this.setState({player});
            }
        }
    }
    isGameOver(){
        //console.log("Baddie Y: " + this.state.baddie.y);
        if((10 >= this.state.baddie.x)&&(this.state.player.y < 20)){
            let baddie = this.state.baddie;
            baddie.x = window.innerWidth-50;
            this.setState({score:0,baddie:baddie});
        }else if((10 >= this.state.baddie.x)&&(this.state.player.y > 20)){
            var score = this.state.score;
            var baddie = this.state.baddie;
            baddie.x = window.innerWidth-50;
            score++;
            this.setState({score});
        }else{
    
        }
    }
    playerJump(){
        if(this.state.player.y === 10){
            console.log("JUMP");
            let player = this.state.player;
            player.jump = 1;
            this.setState({player});
        }
    }
    render(){
    const scoreStyle = {
        textAlign: "center",
        backgroundColor:"aqua"
    }
    const GameRender = (
        <Container fluid={true}>
            <Row style={{textAlign:"center", backgroundColor:"grey"}}>
                <Col>
                    <h3 style={scoreStyle}>{this.state.score}</h3>
                </Col>
                <Col>
                    <h5>Good Luck</h5>
                </Col>
                <Col>
                    <Button onClick={()=>{this.gameClock()}}>Start</Button>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:"center"}}>
                    <Button onClick={()=>{this.playerJump()}}>Jump</Button>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:"center"}}>
                    <h5>Music From phenoxyethanol at <a href="https://freesound.org/people/phenoxyethanol/sounds/415909/#">Freesound.org</a></h5>
                </Col>
            </Row>
        <Map />
        <Baddie width={10} height={15} color={"green"} x={this.state.baddie.x} y={10} />
        <Player width={10} height={15} color={"red"} x={20} y={this.state.player.y} />
        </Container>
        )
        return(GameRender);
    }
}

export default Game;