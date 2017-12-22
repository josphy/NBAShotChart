import React from 'react';
import nba from 'nba';
import {ShotChart} from "./ShotChart";

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer("Stephen Curry").playerId
    }

    render() {
        return (
            <div className="main">
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}