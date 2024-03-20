import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <p className='item-img'>
            <img src={props.item && props.item.img} alt={props.item && props.item.name} />
        </p>
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box