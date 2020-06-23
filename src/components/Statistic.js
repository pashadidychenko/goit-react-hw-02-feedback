import React, { Fragment, Component } from 'react';

export class Statistic extends Component {
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
