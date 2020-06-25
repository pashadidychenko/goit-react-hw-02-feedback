import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TotalCounter = props => {
  const { good, neutral, bad } = props;
  let goodFeedback = Math.round(good / (good + bad + 0.001) / 0.01);
  return (
    <Fragment>
      <h3>Загальна кількість відгуків: {good + neutral + bad}</h3>
      <h3>Статистика позитивних відгуків: {goodFeedback} %</h3>
    </Fragment>
  );
};

export default TotalCounter;

TotalCounter.defaultProps = {
  goodFeedback: 0,
};

TotalCounter.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
};
