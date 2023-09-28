import React, { Component } from 'react';
import './App.css'

class Square extends Component {

  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()} >
        {this.props.value}
      </button>
    )
  }
}

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    // alert(i);

    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}

    />

  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}

        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}

        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}

        </div>

      </div>
    )
  }
}

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div> status </div>
          <ol>history</ol>
        </div>
      </div>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className='app'>
        <Game />
      </div>
    )
  }

}

function calculateWinner(squares) {

  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combination.length; i++) {
    const [a, b, c] = combination[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default App