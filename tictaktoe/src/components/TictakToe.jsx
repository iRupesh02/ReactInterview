import React from 'react'
import usetictaktoe from '../hook/tictaktoe'
function TictakToe() {
    const {board , handleClick , resetGame  , getStatusMessage} = usetictaktoe()
  return (
    <div className="game">
      <div className="status">
        <p>{getStatusMessage()}</p>
        <button className='reset'onClick={resetGame}>Reset</button>
      </div>
      <div className='board'>
        {board.map((b , index)=>{
          return <button key={index}className='btn' onClick={() => handleClick(index) }
          disabled={b !== null}>{b}</button>
        })}
      </div>
  </div>
  )
}

export default TictakToe