import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

export class TotalCounter extends Component {
  render() {
    let goodFeedback = Math.round(this.props.good / (this.props.good + this.props.bad) / 0.01);
    return (
      <Fragment>
        <h3>
          Загальна кількість відгуків: {this.props.good + this.props.neutral + this.props.bad}
        </h3>
        <h3>Статистика позитивних відгуків: {goodFeedback} %</h3>
      </Fragment>
    );
  }
}

TotalCounter.defaultProps = {
  goodFeedback: 0,
};

TotalCounter.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
};
