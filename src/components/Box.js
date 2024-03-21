import React from 'react'

const Box = (props) => {
  return (
    <div className={props.result === 'Lose' ? 'box lose' : 'box'}>
        <h2>{props.title}</h2>
        <p className='item-img'>
            <img src={props.item && props.item.img} alt={props.item && props.item.name} />
        </p>
        <h3>{props.result}</h3>
    </div>
  )
}

export default Box