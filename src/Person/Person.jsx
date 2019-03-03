import React from 'react';

const person = props => (
  <>
    <p>
      {' '}
      I'm a person {props.name} and I'm {props.age} years old
    </p>
    <p>{props.children}</p>
  </>
);

export default person;
