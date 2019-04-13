import React from 'react';
import { strike, ball, foul, hit } from '../helpers/play.js';

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
    e.preventDefault();
    this.setState(strike(this.state));
  }

  ball = e => {
    e.preventDefault();
    this.setState(ball(this.state));
  }

  foul = e => {
    e.preventDefault();
    this.setState(foul(this.state));
  }

  hit = e => {
    e.preventDefault();
    this.setState(hit(this.state));
  }

  render() {
    return (
      <div>
        <h3 data-testid="balls">Balls: {this.state.balls}</h3>
        <h3 data-testid="strikes">Strikes: {this.state.strikes}</h3>
        <h3 data-testid="hits">Hits: {this.state.hits}</h3>
        <h3 data-testid="fouls">Fouls: {this.state.fouls}</h3>
        <h3 data-testid="outs">Outs: {this.state.outs}</h3>
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