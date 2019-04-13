import React from 'react';

import Dashboard from './dashboard.js';

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0,
    fouls: 0,
    outs: 0
  };

  strike = e => {

  }

  ball = e => {
    
  }

  foul = e => {
    
  }

  hit = e => {
    
  }

  render() {
    return (
      <div>
        <h3>Balls: {this.state.balls}</h3>
        <h3>Strikes: {this.state.strikes}</h3>
        <h3>Hits: {this.state.hits}</h3>
        <h3>Fouls: {this.state.fouls}</h3>
        <h3>Outs: {this.state.outs}</h3>
        <Dashboard 
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }
}

export default Display;