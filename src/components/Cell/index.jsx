import React, { Component } from 'react'

import './style.css'

class Cell extends Component {
  constructor(props) {
    super(props)
  }
  onClick(r,c) {
    this.props.onCellClick(r,c);
  }
  render() {
    const { val, cellX, cellY } = this.props
    return (
      <div className="cell-container"
           onClick={() => this.onClick(cellX, cellY)}>
        { val }
      </div>
    )
  }
}

export default Cell
