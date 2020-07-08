import React from 'react';
import MaterialButton from '@material-ui/core/Button';

const FeedbackOptions = ({ addFeedback }) => {
  return (
    <>
      <MaterialButton type="button" color="primary" onClick={() => addFeedback('good')}>
        Добре
      </MaterialButton>
      <MaterialButton type="button" color="default" onClick={() => addFeedback('neutral')}>
        Нейтрально
      </MaterialButton>
      <MaterialButton type="button" color="secondary" onClick={() => addFeedback('bad')}>
        Погано
      </MaterialButton>
    </>
  );
};

export default FeedbackOptions;
