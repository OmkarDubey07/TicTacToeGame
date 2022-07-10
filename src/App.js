import React , { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';
import './components/root.css';

function App() {

  const [board , setBoard] =  useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner ? `winner is ${winner}` : `Next player is ${isXNext ?  'x' : '0'}` ;

  const handleSquareClick = (position) => {

      if(board[position] || winner){
          return;
      }

      setBoard(prev =>{
          return prev.map((square,pos)=> {
           if(pos === position){
              return isXNext ? 'X' : '0';
           }
            return square;
         });
        });

        setIsXNext((prev) => !prev);
  };

  return (
    <div className="app">
      <h1> TIC TAC TOE</h1>
      <h2>{ message } </h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
