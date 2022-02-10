import React, { useState } from 'react'
import "./formInput.css"

export default function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const {label,errorMessage ,onChange, id, ...inputProps} = props

    const handleFocus = (e) => {setFocused(true)}
  return (
    <div className="formInput">
        <label>{props.label}</label>
        <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        />
        <span>{errorMessage}</span>
    </div>
  )
}
