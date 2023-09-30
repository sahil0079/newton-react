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


  renderSquare(i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}

    />

  }

  render() {


    return (
      <div>
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

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    console.log('history', this.state.history)
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const description = move ?
        `Go to move # ${move}` : 'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} > {description} </button>
        </li>
      )
    })

    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div> {status} </div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

//store history of moves
//

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