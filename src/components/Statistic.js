import React, { Fragment } from 'react';

export class Statistic extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>Статистика</h2>
        <h3>Добре: {this.props.good}</h3>
        <h3>Нейтрально: {this.props.neutral}</h3>
        <h3>Погано: {this.props.bad}</h3>
      </Fragment>
    );
  }
}
