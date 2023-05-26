import { useState } from 'react'
import FromInput from './components/FromInput'
import './App.css'

function App() {
  const [userInfo,setUserInfo ] = useState({
    UserName:'',
    Email:'',
    Password:'',
    ConfirmPassword:'',
  })

  const inputprops=[
    { id: 1,
      name:'UserName', 
      label:"Username",
      type:'text', 
      placeholder:' ',
      errorMessage:"between 3 -16 alphabets number only",
      pattern:`^[A-Za-z0-9]{3,16}$`,
      required:true,
    },
    {  id: 2,
      name:'Email' ,
      label:"Email",
      type:'email',
      placeholder:' ',
      errorMessage:"Enter a valid Email",
      pattern:`[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$`,
      // [a-zA-Z0-9\-\.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$
      required:true,
    },
    {  id: 3,
      name:'Password', 
      label:"Password",
      type:'password',
      placeholder:' ',
      errorMessage:"Create a strong password (8-16 characters)", 
      pattern:'^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*#?&^+=])[A-Za-z\\d@$!%*#?&^+=]{8,16}$',
      required:true,
    },
    {  id: 4,
      name:'ConfirmPassword',
      label:"Confirm Password",
      type:'password',
      placeholder:' ', 
      errorMessage:"passwords doesn't match", 
      pattern: userInfo.Password,
      required:true,
    }
  ]

  const handleOnChange=(e)=>{
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  } 
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const { UserName, Email, Password, ConfirmPassword } = userInfo;
    alert("UserName: "+UserName+
    '\nEmail: '+Email+
'\nPassword: '+Password+
'\nConfirmPassword: '+ConfirmPassword
    );

  }


  

  return (
    <>
    <div className='bgImage'>
    
    <form onSubmit={handleOnSubmit}>
      <p className='login-logo'>register</p>
      {inputprops.map(
        (input)=>{return <FromInput key={input.id} {...input}  onChange={handleOnChange}/>}
        )}
      
        <button type='submit'>Submit</button>
    </form>
    </div>
   
    </>
  )
}

export default App
