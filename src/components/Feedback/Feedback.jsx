import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    } else return 0;
  };

  render() {
    return (
      <div>
        <div className={s.Statistics}>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
          </style>
          <h1 className={s.title}>Please leave feedback</h1>
          <FeedbackOptions
            onButtonGood={this.handleGood}
            onButtonNeutral={this.handleNeutral}
            onButtonBad={this.handleBad}
          />
          <Statistics
            valueGood={this.state.good}
            valueNeutral={this.state.neutral}
            valueBad={this.state.bad}
            valueTotal={this.countTotalFeedback()}
            valuePositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}

export default Feedback;
