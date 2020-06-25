import React from 'react';

const Notification = props => {
  const { message } = props;
  return <h3>{message}</h3>;
};

export default Notification;
