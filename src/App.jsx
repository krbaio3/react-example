import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'superpoya', age: 26 },
      { name: 'KrBaio', age: 28 },
      { name: 'Nebur', age: 29 },
      { name: 'Putita', age: 29 }
    ],
    otherState: 'alguna mierda'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    console.log('was clicked');
    setPersonState({
      persons: [
        { name: 'superpoya', age: 32 },
        { name: 'KrBaio3', age: 32 },
        { name: 'Nebur', age: 29 },
        { name: 'Putita', age: 29 }
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hi! I 'm a React App</h1>
      <p>This is really working</p>
      <button className="customButton" onClick={switchNameHandler}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobby is running
      </Person>

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />

      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />

      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
    </div>
  );
};

export default app;
