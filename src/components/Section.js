import React from 'react';

const Section = props => {
  const { title } = props;
  return (
    <>
      <h1>{title}</h1>
      {props.children}
    </>
  );
};

export default Section;
