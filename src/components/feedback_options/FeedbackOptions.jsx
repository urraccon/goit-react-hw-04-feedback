import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const handleFeedback = evt => {
  //     const { textContent } = evt.target;
  //     console.log(textContent);
  //     this.props.onLeaveFeedback(textContent);
  //   };

  return (
    <div className={styles.buttons}>
      {options.map(option => {
        return (
          <button
            onClick={onLeaveFeedback}
            key={option}
            className={styles.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
