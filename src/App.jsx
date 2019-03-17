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
    otherState: 'alguna mierda',
    showPersons: false
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
      font: 'inherit',
      border: '1px solid black',
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
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi! I 'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? persons : null}
      </div>
    );
  }
}

export default App;
