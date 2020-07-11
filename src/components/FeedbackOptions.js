import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(key => (
        <MaterialButton
          type="button"
          color={key.color}
          key={uuidv4()}
          onClick={() => onLeaveFeedback(key.feedbackType)}
        >
          {key.feedbackTitle}
        </MaterialButton>
      ))}
    </>
  );
};

export default FeedbackOptions;
