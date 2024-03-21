import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
        <div className={this.props.result === 'Lose' ? 'box lose' : 'box'}>
            <h2>{this.props.title}</h2>
            <p className='item-img'>
                <img src={this.props.item && this.props.item.img} alt={this.props.item && this.props.item.name} />
            </p>
            <h3>{this.props.result}</h3>
        </div>
      )
  }
}
