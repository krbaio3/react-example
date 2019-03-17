import React from 'react';
import Person from './Person/Person';
import uuid from 'uuid/v4';
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Vankish', age: 26, id: uuid() },
      { name: 'KrBaio', age: 28, id: uuid() },
      { name: 'Nebur', age: 29, id: uuid() },
      { name: 'Loser', age: 29, id: uuid() }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  deletePersonHandler = idPerson => {
    const persons = [...this.state.persons];
    persons.splice(idPerson, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'cadetblue',
      color: 'black',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      borderRadius: '15px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
      style.backgroundColor = 'green';
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1> Hi! I 'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? persons : null}
      </div>
    );
  }
}

export default App;
