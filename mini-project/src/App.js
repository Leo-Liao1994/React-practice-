import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Rod', age: 200}
    ]
  }

  switchNameHandle = () => {
    console.log('button clicked')
    this.setState({
      persons :[
        {name: 'Rodddd', age: 2000}
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        Anybody Home? no?
        </p>
        <button onClick = {this.switchNameHandle}>Switch Name</button>
        <Person name= {this.state.persons[0].name} age = {this.state.persons[0].age}> I'm not on earth </Person>
       
      </div>
    );
  }
}

export default App;
