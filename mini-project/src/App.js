import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/output/UserInput';
import UserOutput from './UserInput/output/UserOutput';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    userInput : "",
    userOutput : ""
  }

  switchNameHandler = (newName) => {
 
    this.setState( {
      persons: [
        { name: newName, age: 28 },
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 29 },
      ]
    } )
  } 

  inputHandler = (event) => {
    this.setState( {
         userInput : event.target.value
    })
  }

  outputHandler = () => {
    this.setState( {
         userOutput : this.state.userInput
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
    
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <UserInput  
        input ={this.inputHandler}
        inputclick  = {this.outputHandler}
        > </UserInput>
        <UserOutput 
          output = {this.state.userOutput}
        ></UserOutput>
      </div>
      );  }
}

export default App;


