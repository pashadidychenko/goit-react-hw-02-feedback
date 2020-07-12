import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options[0].map(el => (
        <MaterialButton type="button" key={uuidv4()} onClick={() => onLeaveFeedback(el)}>
          {el}
        </MaterialButton>
      ))}
    </>
  );
};

export default FeedbackOptions;
