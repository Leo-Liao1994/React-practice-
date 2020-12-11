import React from "react"

const person = (props) => {
return  (
<div>
<p> I'm {props.name} I have {props.age} years to live</p>
<p>{props.children}</p>
</div>
)
}

export default person;