import React from "react" 
import UserOutput from './UserOutput.css'


const userOutput = props => {
  return (
 <div className = "userOutput">
   <p>This is what he wanted to say :</p>
  <p className = "output" > {props.output}</p>
 </div>
  
  )
}

export default userOutput;