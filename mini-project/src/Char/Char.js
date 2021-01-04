import React from 'react' 
import Char from './Char.css'

const char = props => {
  return (
  <div className = "Char">
    <p>{props.letter}</p>
  </div>
  )
}

export default char;