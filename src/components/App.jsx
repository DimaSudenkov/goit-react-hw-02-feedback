import React, { Component } from "react"
import Statistics from './statistics/Statistics'
import FeedbackOption from "./feedbackOptions/FeedbackOption"
import Section from "./section/Section"
import Notification from "./notification/Notification"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  // handlerClickGood = () => (
  //   this.setState((prev) => ({
  //     good: prev.good + 1,
  //   }))
  // )

  // handlerClickNeutral = () => (
  //   this.setState((prev) => ({
  //     neutral: prev.neutral + 1
  //   }))
  // )

  // handlerClickBad = () => (
  //   this.setState((prev) => ({
  //     bad: prev.bad + 1
  //   }))
  // )

  handlerClick = (optionItem) => (
    this.setState((prev) => ({
      [optionItem]: prev[optionItem] + 1
    }
    ))
  )

  countTotalFeedback() {
    const total = this.state.bad + this.state.good + this.state.neutral;
    return total
  }

  countPositiveFeedbackPercentage() {
    const positiveResponses = this.state.good * 100 / this.countTotalFeedback();
    return Math.round(positiveResponses)
  }
  
  render() {
    console.log(this.countTotalFeedback());
    return (
    <div>
        {/* <h2>Please leave feedback</h2> */}
        <Section title="Please leave feedback">
        <FeedbackOption
          options={Object.keys(this.state)}
          onLeaveFeedBack={this.handlerClick}
          />
        </Section>

    {/* <button onClick={this.handlerClickGood}>Good</button>
    <button onClick={this.handlerClickNeutral}>Neutral</button>
    <button onClick={this.handlerClickBad}>Bad</button> */}
        
        {/* <h2>Statistics</h2> */}
       {this.countTotalFeedback()? ( 
        <Section title="Please leave feedback">
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage() || 0}
        />
        </Section>):
        <Notification message='There is on feedback' />}
        {/* <ul>
          <li>Good:{this.state.good}👍</li>
          <li>Neutral:{this.state.neutral}😐</li>
          <li>Bad:{this.state.bad}👎</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage() || 0}%</li>
    </ul> */}
        
    </div>
    )}
  }
