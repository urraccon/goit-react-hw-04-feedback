import { Component } from 'react';
import styles from './App.module.css';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback_options/FeedbackOptions';
import Section from './common/section/Section';
import Notification from './common/notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // static options = ['good', 'neutral', 'bad'];

  total = () => {
    // debugger;
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    if (good === 0) return 0;
    return Math.trunc((good / this.total()) * 100);
  };

  handelFeedback = evt => {
    debugger;
    const { textContent } = evt.target;
    // console.log(textContent);
    this.setState(prev => {
      return {
        [textContent]: prev[textContent] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    // console.log(options);
    return (
      <div className={styles.window}>
        <div className={styles.feedback}>
          <Section title="Please leave feedback" />
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handelFeedback}
          />
          <Section title="Statistics" />
          {this.total() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.positiveFeedback()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
