import React from 'react'

const ScoreBoard = (props) => {
  return (
    <div className='board'>
        <div className='boardBox win'>
            <p className='title'>Win</p>
            <p>{props.userWin}</p>
        </div>
        <div className='boardBox lose'>
            <p className='title'>Lose</p>
            <p>{props.computerWin}</p>
        </div>
    </div>
  )
}

export default ScoreBoard