import React from 'react';
import Styles from './Person.module.css';

const person = props => {
  return (
    <div className={Styles.Person}>
      <p onClick={props.click}>
        I'm a person {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
