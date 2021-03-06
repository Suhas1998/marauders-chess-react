import React, { Component } from 'react';
import './ui.css';
import Clock from '../clock/Timer';
import blackbg from '../../static/blackbg.png';
import whitebg from '../../static/whitebg.jpg';

class GameInfo extends Component {
    render(){
        const curr_player_var = this.props.curr_player;
        const roomId = this.props.roomId;
        const player_color = this.props.my_color;
        
        return (
            <div class="col-sm-3" class="col-md-3" class="col-lg-3" class ="mx-auto">
                
                <div class={"rounded text-white shadow mt-2 p-3 pl-6 pr-6 text-center mb-2 " + (player_color === 1? (curr_player_var === 1? "bg-green":"bg-red" ):"bg-opponent")}>
                    <p class="mb-2 font-weight-bold text-uppercase" >{player_color === 1? (curr_player_var === 1? "Play Your Turn":"Wait for your Turn" ):(curr_player_var === 1? "Opponent is Playing":"Opponent is Waiting" )}</p>
                    <div id="clock-b" class="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                        <Clock time={this.props.player1Time} timeOver= {() => this.props.timeOver()} />
                    </div>
                </div>
                <div class={"rounded text-white shadow mt-2 p-3 pl-6 pr-6 text-center mb-2 " + (player_color === 2? (curr_player_var === 2? "bg-green":"bg-red" ):"bg-opponent")}>
                    <p class="mb-2 font-weight-bold text-uppercase">{player_color === 2? (curr_player_var === 2? "Play Your Turn":"Wait for your Turn" ):(curr_player_var === 2? "Opponent is Playing":"Opponent is Waiting" )}</p>
                    <div id="clock-b" class="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                        <Clock time={this.props.player2Time} timeOver= {() => this.props.timeOver()} />
                    </div>
                </div>
                <div class="card">
                    {/* <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg" alt="profile-sample1" class="background"/> */}
                    <h5 class="font-weight-bold" >Game Room Id: {roomId} </h5>
                    <h5 class="font-weight-bold" >You are playing as : {player_color===1?"White":"Black"} </h5>
                </div>
                <div class="card profile-card-1 bg-blue">
                    <p class="mb-0 font-weight-bold text-uppercase">Log:
                    <br></br>
                    {this.props.log_message}</p>
                </div>
            </div>
        )
    }
}

export default GameInfo;