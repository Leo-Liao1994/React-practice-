import React from "react" 


const userInput = props => {
  return (
    <div className = "userInput"> 
    <p>Hey this is what I wanna say</p>
  <textarea type = "text" onChange = {props.input}> </textarea>
  <div>  
    <button onClick = {props.inputclick}>Submit</button>
  </div>
    </div>
  )
}

export default userInput;