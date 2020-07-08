import React from 'react';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const Section = props => {
  const { title, good, neutral, bad, addFeedback } = props;
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions addFeedback={addFeedback} />
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistic dataProps={props} />
      ) : (
        <Notification message="Відгуки відсутні" />
      )}
    </>
  );
};

export default Section;
