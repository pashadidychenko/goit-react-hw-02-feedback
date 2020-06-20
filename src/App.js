import React from 'react';
import { Title, ButtonGood, ButtonNeutral, ButtonBad } from './components/Button.js';
import { Statistic } from './components/Statistic.js';
import { TotalCounter } from './components/Total.js';
import { Notification } from './components/Notification.js';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(state => ({ good: state.good++ }));
  };

  neutralFeedback = () => {
    this.setState(state => ({ neutral: state.neutral++ }));
  };

  badFeedback = () => {
    this.setState(state => ({ bad: state.bad++ }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Title />
        <div>
          <ButtonGood onGood={this.goodFeedback} />
          <ButtonNeutral onNeutral={this.neutralFeedback} />
          <ButtonBad onBad={this.badFeedback} />
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
