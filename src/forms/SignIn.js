import React from 'react';
import { useState } from 'react';
import Login from '../Login';
import Register from './Register';

const SignIn = ({setLoggedIn}) => {
    var [activeUser, setActiveUser] = useState(true);
  return (
    <div>
      <div className="d-flex flex-row mb-3 justify-content-center">
        <div className="p-2 btn btn-outline-primary m-2" onClick={()=>setActiveUser(true)}><h2>Log in</h2></div>
        <div className="p-2 btn btn-outline-primary m-2" onClick={()=>setActiveUser(false)}><h2>Register</h2></div>
      </div>
    {activeUser? <Login setLoggedIn={setLoggedIn}/>:<Register setLoggedIn ={setLoggedIn}/>}
    </div>
  )
}

export default SignIn
