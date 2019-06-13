import React, { Component } from 'react';

import Board from './components/Board'
import Message from './components/Message'
import Document from './components/Document'
import { getBoard } from './utils/generateBoard'
import { getTotalShipCells, getEachShipSize, getEachInitialHits } from './utils/shipType'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: null,
      totalShipCells: 0,
      totalHits: 0,
      eachShipSize: [],
      eachShipHits: [],
      message: 'Welcome!'
    }
  }
  componentWillMount() {
    this.setState({
      board: getBoard(),
      totalShipCells: getTotalShipCells(),
      eachShipSize: getEachShipSize(),
      eachShipHits: getEachInitialHits(),
    })
  }
  onCellClick(r,c) {
    let cellVal = this.state.board[r][c];
    const newBoard = [...this.state.board];
    const newEachShipHits = [...this.state.eachShipHits];
    let newTotalHits = this.state.totalHits;

    if(cellVal < 0) {
      this.setState({
        message: 'Already Attacked'
      })
    } else if(cellVal == 0) {
      newBoard[r][c] = -1;
      this.setState({
        message: 'Miss',
        board: newBoard
      })
    } else if(cellVal < 100) {
      newBoard[r][c] = newBoard[r][c] * -1;
      this.setState({
        message: 'Miss',
        board: newBoard
      })
    } else if(cellVal >= 100) {
      const shipID = cellVal / 100;
      newBoard[r][c] = newBoard[r][c] * -1;
      newEachShipHits[shipID - 1] = newEachShipHits[shipID - 1] + 1;
      newTotalHits = newTotalHits + 1
      let newMessage = 'Hit'
      if(newTotalHits == this.state.totalShipCells) {
        newMessage = 'Win'
      } else if(newEachShipHits[shipID - 1] == this.state.eachShipSize[shipID - 1]) {
        newMessage = 'Sunk'
      }
      this.setState({
        message: newMessage,
        board: newBoard,
        eachShipHits: newEachShipHits,
        totalHits: newTotalHits
      })
    }
  }
  render() {
    const { board, totalShipCells, message } = this.state
    return (
      <div className="App">
        <Message message={message} />
        <Board board={board}
               onCellClick={(r,c) => this.onCellClick(r,c)} />
        <Document />
      </div>
    );
  }
}

export default App;
