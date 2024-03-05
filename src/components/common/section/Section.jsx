import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
