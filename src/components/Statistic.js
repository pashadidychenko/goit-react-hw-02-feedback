import React, { Fragment } from 'react';

const Statistic = ({ dataProps }) => {
  const { good, neutral, bad, total, positivePercentage } = dataProps;
  return (
    <Fragment>
      <h2>Статистика</h2>
      <h3>Добре: {good}</h3>
      <h3>Нейтрально: {neutral}</h3>
      <h3>Погано: {bad}</h3>
      <h3>Загальна кількість відгуків: {total()}</h3>
      <h3>Статистика позитивних відгуків: {positivePercentage()} %</h3>
    </Fragment>
  );
};

export default Statistic;
