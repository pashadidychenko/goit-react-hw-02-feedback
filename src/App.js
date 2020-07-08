import React from 'react';
import Button from './components/Button.js';
import Title from './components/Title.js';
import Statistic from './components/Statistic.js';
import TotalCounter from './components/Total.js';
import Notification from './components/Notification.js';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = el => {
    this.setState(state => ({ [el]: state[el] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Title />
        <div>
          <Button
            type="button"
            data="good"
            message="Добре"
            addFeedback={this.addFeedback}
            color="primary"
          />
          <Button
            type="button"
            data="neutral"
            message="Нейтрально"
            addFeedback={this.addFeedback}
            color="default"
          />
          <Button
            type="button"
            data="bad"
            message="Погано"
            addFeedback={this.addFeedback}
            color="secondary"
          />
        </div>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <div>
            <Statistic good={good} neutral={neutral} bad={bad} />
            <TotalCounter good={good} neutral={neutral} bad={bad} />
          </div>
        ) : (
          <Notification message="Відгуки відсутні" />
        )}
      </Container>
    );
  }
}

export default App;

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  message: PropTypes.string,
};
