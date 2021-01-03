import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/output/UserInput';
import UserOutput from './UserInput/output/UserOutput';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    persons: [
      { id:"1", name: 'Max', age: 28 },
      { id:"2", name: 'Manu', age: 29 },
      { id:"3", name: 'Stephanie', age: 26 }
    ],
    userInput : "",
    userOutput : "", 
    showPersons : false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
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

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personsIndex,1) 
    this.setState({persons: persons})
  }


  render () {
    let persons = null; 

    if (this.state.showPersons) {

      let personState = (person, index) => {
        return <Person
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) =>this.nameChangedHandler(event, person.id)}
        />
      }

      persons = (
          <div >
            {this.state.persons.map(personState)}
       
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
          output = {this.state.userOutput} 
          count = {this.state.userOutput.length}
          >
        </UserOutput>
        </div>
        <Validation 
          output = {this.state.userOutput.length}
        ></Validation>
      </div>
      );  }
}

export default App;


