import React, { Component } from 'react'

import './style.css'

class Message extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="message-container">
        { this.props.message }
      </div>
    )
  }
}

export default Message
