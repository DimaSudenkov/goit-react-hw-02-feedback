import React, { Component } from "react"


class FeedBackMarkup extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return (
      <div>
    <h2>Please leave feedback</h2>

    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>
    <h2>Statistics</h2>

    <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
      <li>Total:</li>
      <li>Positive feedback:</li>
    </ul>
    </div>
    )}
}

export default FeedBackMarkup