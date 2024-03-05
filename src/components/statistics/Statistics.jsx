import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.stats}>
      <h2 className={styles.stat}>
        Good: <span className={styles.statValue}>{good}</span>
      </h2>
      <h2 className={styles.stat}>
        Neutral: <span className={styles.statValue}>{neutral}</span>
      </h2>
      <h2 className={styles.stat}>
        Bad: <span className={styles.statValue}>{bad}</span>
      </h2>
      <h2 className={styles.stat}>
        Total: <span className={styles.statValue}>{total}</span>
      </h2>
      <h2 className={styles.stat}>
        Positive feedback:{' '}
        <span className={styles.statValue}>{`${positivePercentage}%`}</span>
      </h2>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
