import React from 'react';

class Display extends React.Component {

  render() {
    return (
      <div>
        <button data-testid="strikeBTN" onClick={this.props.strike}>Strike</button>
        <button data-testid="ballBTN" onClick={this.props.ball}>Ball</button>
        <button data-testid="foulBTN" onClick={this.props.foul}>Foul</button>
        <button data-testid="hitBTN" onClick={this.props.hit}>Hit</button>
      </div>
    );
  }
}

export default Display;