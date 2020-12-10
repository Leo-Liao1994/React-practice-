import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        Anybody Home? no?
        </p>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, createElement('h1',null, 'I need a null after any tap' ))
  }
}

export default App;
