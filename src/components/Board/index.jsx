import React, { Component } from 'react'

import Cell from '../Cell'
import './style.css'

class Board extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { board, onCellClick } = this.props
    return (
      <table className="boardTable">
          <tbody>
          {board.map((row, x) => {
            return (
              <tr key={x}>{row.map((col, y) => {
                return (
                  <td key={y} className='tableCell'>
                    <Cell val={col}
                          cellX={x}
                          cellY={y}
                          onCellClick={() => onCellClick(x,y)} />
                  </td>
                )
              })}
             </tr>
            )
          })}
          </tbody>
        </table>
    )
  }
}

export default Board
