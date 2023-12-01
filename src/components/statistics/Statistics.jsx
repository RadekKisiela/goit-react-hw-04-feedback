import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.statsWrapper}>
        <p className={css.statsData}>Good: {good}</p>
        <p className={css.statsData}>Neutral: {neutral}</p>
        <p className={css.statsData}>Bad: {bad}</p>
        <p className={css.statsData}>Total: {total}</p>
        <p className={css.statsData}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
