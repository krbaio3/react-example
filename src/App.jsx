import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      { name: 'superpoya', age: 26 },
      { name: 'KrBaio', age: 28 },
      { name: 'Nebur', age: 29 },
      { name: 'Putita', age: 29 }
    ],
    otherState: 'alguna mierda'
  };

  switchNameHandler = name => {
    console.log('was clicked');
    this.setState({
      persons: [
        { name: name, age: 32 },
        { name: 'KrBaio3', age: 32 },
        { name: 'Nebur', age: 29 },
        { name: 'Putita', age: 29 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 32 },
        { name: 'KrBaio3', age: 32 },
        { name: 'Nebur', age: 29 },
        { name: 'Putita', age: 29 }
      ]
    });
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

    return (
      <div className="App">
        <h1> Hi! I 'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('megapoya')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'ultra nabo')}
          change={this.nameChangedHandler}
        >
          My hobby is running
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
