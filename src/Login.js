import React from 'react'
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { firebase } from './services/FirebaseConfig';


const Login = ({setLoggedIn}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const navigate = useNavigate();
  var database;
  try {
    database = firebase()
  } catch (error) {
    
  }

  const handleValidation = (event) => {
    let formIsValid = false;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Enter a valid email address");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (password.length < 5) {
      formIsValid = false;
      setpasswordError(
        "Length must be min 8 characters and Max 22 chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }
    //console.log(formIsValid)
    return formIsValid;
  };
  async function getUser(){
    var client = null;
    try {
      database = new firebase();
      const clients = await database.getStudents();
      
      clients.forEach((element)=>{
        if(element.email.trim().toLowerCase().includes(email.trim().toLowerCase()))
          client = element;
      });
      setpasswordError("");
    } catch (error) {
      console.log(error);
      setpasswordError(
        "Username not found"
      );
      return null;
    }
    //console.log("Client "+client);
    return client;
  }
  const loginSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()){
      var user = await getUser();
      
      if ( user) {
          console.log(user.password === password+" "+password+" "+user.password )
          if (user.password === password){
          localStorage.setItem("user",JSON.stringify(user));
          localStorage.setItem("loggedIn","true");
          navigate('/')} else setpasswordError(
            "Password incorrect"
          );
      }
      else{
        setpasswordError(
          "No account found for: "+email
        );
      }
    }else{
      setpasswordError(
        "Username or password incorrect"
      );
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Submit
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
