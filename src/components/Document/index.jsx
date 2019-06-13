import React, { Component } from 'react'

import './style.css'

class Document extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="document-container">
        <p> #1.In this battle board, we simulate two battle ships(each ship has length of two). Refresh the page to start a new game. In each new game, two ships are placed on the board randomly.<br />
        #2.100 and 200 represents ship body. 10 and 20 means cells surrouding ship body(According to wiki: there are no adjacent battleships, so surrouding cells are used to separate different shipsbody). 0 means empty cell. <br />
        #3.Feel free to click on each cell, state change will be seen immediately. Negative number is used to store click history. <br />
        #4.If empty cell or surrouding cell is clicked, message says "Miss". <br />
        #5.If any cell is clicked for second time, message says "Already Attacked". <br />
        #6.Message says "Sunk" if all ship body cells of a single ship are attacked. <br />
        #7.Message says "Win" if all ship body cells of all ships are attacked.
        </p>
      </div>
    )
  }
}

export default Document
