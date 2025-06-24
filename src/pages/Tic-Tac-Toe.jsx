import Sidebar from '../components/sidebar';
import Top from '../components/Top';
import { useState } from 'react';
import '../css/tic-tac-toe.css';

export default function Tic() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  const check = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "Draw"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
     
      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="top-container">
          <Top />
          <div className="tictactoe">
            <h2>Tic-Tac-Toe</h2>
            <div className="check">{check}</div>
            <div className="board">
              <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>
              <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>
              <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div>
            </div>
            <button className="reset" onClick={resetGame}>Restart</button>
          </div>
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
