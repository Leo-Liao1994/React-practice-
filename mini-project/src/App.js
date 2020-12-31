import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/output/UserInput';
import UserOutput from './UserInput/output/UserOutput';
import person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    userInput : "",
    userOutput : "", 
    showPersons : false
  }

  switchNameHandler = (newName) => {
 
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 29 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 26 }
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; 
    this.setState({showPersons : !doesShow});
  }

  render () {
    let persons = null; 

    if (this.state.showPersons) {
      persons = (
<div >
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
         <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
          </div> 
      )
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        { this.state.showPersons ?
        <button onClick={ this.togglePersonsHandler}>Hide Name</button> 
        : 
        <button onClick={ this.togglePersonsHandler}>Show Name</button> 
        }
        {persons}

        <div className = "user_section">
        <UserInput  
        input ={this.inputHandler}
        inputclick  = {this.outputHandler}>
        </UserInput>
        <UserOutput 
          output = {this.state.userOutput}>
        </UserOutput>
        </div>
      </div>
      );  }
}

export default App;


