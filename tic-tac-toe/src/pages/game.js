/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import './game.css'
import Patterns from './pattern'

const init=['','','','','','','','',''];
function game() {
  const [board,setBord]=useState(init)
  const [player,setPlayer]=useState('x');
  const [lidx,setLidx]=useState(-1)
  const [win,setWin]=useState("Winner is not Yet")
  
  let playerchange=(idx)=>{
    
    if(board[idx] !=="")return;
    setLidx(idx);
  setBord(board.map((val,i)=>{
    if (i=== idx) return player;
    return val;
  }))
   
    // setPlayer(player === "x" ? "o" :"x");
    if(player==="x"){
      setPlayer("o")
    }else{setPlayer("x")}
   };
  const checkwin=()=>{
    if(lidx<0) return;
    const checkArr=Patterns[lidx];
    const prevPlayer=player === "x" ? "o" :"x";
    
    checkArr.forEach(arr=>{
    if (board[arr[0]]=== prevPlayer &&
       board[arr[1]]=== prevPlayer&& 
       board[arr[2]]=== prevPlayer ){
        alert(`player ${prevPlayer} is win`)
        setWin(`player =(${prevPlayer}) Win` )
        reset()
    }
    })
    // console.log(Patterns[lidx]);
    console.log("shjb");
  }
    const reset=()=>{
      setBord(init);
      setPlayer("x")
      setLidx(-1)
    }


  useEffect (()=>{
      checkwin();
  })
  
  return (
    <>
    <h1>current Player is {player}</h1>
    <h1>{win}</h1>
    <div className="board">
        {board.map((sq,i)=>{
          return <div className="board_tiles" onClick={()=>playerchange(i)}>{sq}</div>
        })}
    </div>
    <button onClick={reset} className="btn">Reset</button>
        </>
  )
}

export default game