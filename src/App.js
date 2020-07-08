import React from 'react';
import Section from './components/Section.js';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = el => {
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
        <Section
          title="Будь-ласка залиште Ваш відгук"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
          addFeedback={this.addFeedback}
        />
      </Container>
    );
  }
}

export default App;
