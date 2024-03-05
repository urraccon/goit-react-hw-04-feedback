import styles from './App.module.css';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback_options/FeedbackOptions';
import Section from './common/section/Section';
import Notification from './common/notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // static options = ['good', 'neutral', 'bad'];

  const total = () => {
    // debugger;
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    if (good === 0) return 0;
    return Math.trunc((good / total()) * 100);
  };

  const handelFeedback = evt => {
    debugger;
    const { textContent } = evt.target;
    // console.log(textContent);
    switch (textContent) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Option unavailable');
    }
  };

  const options = ['good', 'neutral', 'bad'];
  // console.log(options);
  return (
    <div className={styles.window}>
      <div className={styles.feedback}>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={options} onLeaveFeedback={handelFeedback} />
        <Section title="Statistics" />
        {total() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positiveFeedback()}
          />
        )}
      </div>
    </div>
  );
};

export default App;
