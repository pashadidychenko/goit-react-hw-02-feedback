import React, { Fragment } from 'react';

const Statistic = props => {
  const { good, neutral, bad } = props;
  return (
    <Fragment>
      <h2>Статистика</h2>
      <h3>Добре: {good}</h3>
      <h3>Нейтрально: {neutral}</h3>
      <h3>Погано: {bad}</h3>
    </Fragment>
  );
};

export default Statistic;
