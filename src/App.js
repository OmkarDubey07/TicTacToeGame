import React , { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';
import './components/root.css';

function App() {
  const [history , setHistory] =  useState([ 
    {board: Array(9).fill(null), isXNext: true } 
  ]);
  const [currentMove , setCurrentMove] = useState(0);

  const current = history[currentMove];


  const winner = calculateWinner(current.board);

  const message = winner ? `winner is ${winner}` : `Next player is ${current.isXNext ?  'x' : '0'}` ;

  const handleSquareClick = (position) => {

      if(current.board[position] || winner){
          return;
      }

      setHistory(prev =>{
          const last = prev[prev.length -1];

          const newBoard = last.board.map((square,pos)=> {
           if(pos === position){
              return last.isXNext ? 'X' : '0';
           }
            return square;
         });

          return prev.concat({ board: newBoard, isXNext: !last.isXNext })
        });
        setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1> TIC TAC TOE</h1>
      <h2>{ message } </h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
