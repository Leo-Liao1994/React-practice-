import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
 
  const [personsState, setPersonState ] =  useState({ // [0] is the state  [1] is the function that motify state
    persons: [    
    {name: 'Rod', age: 200},
    {name: 'Hoff', age: 300},
    {name: 'Lee', age: 412}
    ]
  })


  const switchNameHandle = () => {
    console.log('button clicked')
    setPersonState({
      persons :[
        {name: 'Rodddd', age: 2000},
        {name: 'Hoff', age: 300},
        {name: 'Lee', age: 412}
      ]
    })
  }

  
    return (
      <div className="App">
        <p className="App-intro">
        Anybody Home? no?
        </p>
        <button onClick = {switchNameHandle}>Switch Name</button>
        <Person name= {personsState.persons[0].name} age = {personsState.persons[0].age}> I'm not on earth </Person>
        <Person name= {personsState.persons[1].name} age = {personsState.persons[1].age}>  </Person>
        <Person name= {personsState.persons[2].name} age = {personsState.persons[2].age}>  </Person>

      </div>
    );
  }


export default app;


