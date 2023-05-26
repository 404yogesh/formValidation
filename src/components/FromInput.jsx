import {React, useState} from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import './formInput.css'

export default function FromInput({label,type,id,onChange,errorMessage,...input}) {
  const [focused, setFocused] = useState(false);
  const [showpassword, setShowpassword]= useState(false);
  const [icon, setIcon]=useState(eyeOff);
  
  const handleOnBlur=()=>{
    setFocused(true)
  }

  const handleShowpassword=()=>{
      setShowpassword(!showpassword)
      showpassword? setIcon(eyeOff):setIcon(eye)
      }
  return (
    <>
    <div className='formInput'>
      {/* <div class="groupClass"> */}
      <input {...input} type={type==="password"?(showpassword?"text":"password"):type}
      onChange={onChange}
      //onBlur triggers only when you take the cursor out of the input field 
      onBlur={handleOnBlur} 
      focused={focused.toString()} 
      onFocus={()=>{input.name==='ConfirmPassword' && setFocused(true)}}
      autoComplete='off'
      /> 
    
     
      {type==='password' ? 
      <p className='iconHolder' 
      onClick={handleShowpassword}>
        <Icon icon={icon} size={20}/>
      </p>:
      <p className='iconHolder'></p>}

      <label>{label}</label>
      {/* </div> */}
    {/* <span className='error' style={{display: focused ? "block" : "none"}}>{errorMessage}</span> */}
    <span className='error' >{errorMessage}</span>
      </div>
    </>
  )
}
