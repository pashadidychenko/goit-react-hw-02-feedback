import React from 'react';
import MaterialButton from '@material-ui/core/Button';

const Button = props => {
  const { color, addFeedback, data, message } = props;
  return (
    <MaterialButton variant="contained" color={color} onClick={() => addFeedback(data)}>
      {message}
    </MaterialButton>
  );
};

export default Button;
