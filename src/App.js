import React from 'react';
import Section from './components/Section.js';
import Container from '@material-ui/core/Container';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el => {
    this.setState(state => ({ [el]: state[el] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad } = this.state;
    return Math.round(good / (good + bad + 0.001) / 0.01);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Будь-ласка залиште Ваш відгук">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={[Object.keys(this.state)]}
          />
        </Section>
        <Section title="Статистика">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="Відгуки відсутні" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
