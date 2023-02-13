import React, { useState } from 'react'
import {  useNavigate, } from "react-router-dom";
import { useRef } from 'react';
import {firebase} from '../services/FirebaseConfig'



const Register = () => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const idRef = useRef();
    const telRef = useRef();
    const parentTelRef = useRef();
    const subjectRef = useRef();
    const schoolRef = useRef();
    const conpassRef = useRef();
    const passRef = useRef();
    const [verified, setVerified]= useState(true);
    const [errorMessage, setError]= useState("");
    function handleValidation(){
        return detectPass();
    }
    function getPerson(){
      return {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        id: idRef.current.value,
        email: emailRef.current.value,
        tel: telRef.current.value,
        parentTel: parentTelRef.current.value,
        school: schoolRef.current.value,
        subject: subjectRef.current.value,
        payments: "",
        password: passRef.current.value,
      }
    }
    const loginSubmit = async(e)=>{
        e.preventDefault();
    if (handleValidation()){
      const database = new firebase();
      try{
        const done = await database.updateLearner(getPerson());
        console.log(done);
        alert("Registered successfully use your email and password!");
        navigate('/login');
        window.location.reload();
      }catch(e){
        console.log(e);
      }
      
    }
    }
    const detectPass = ()=>{
      if (passRef.current.value.length < 5){
        setError("Password must be atleast 5 characters long");
        return false;
      }
      else if (passRef.current.value === conpassRef.current.value){
        setError("")
        setVerified(true);
        return true;
      }
      setError("Password does not match")
      setVerified(false);
      return false;
    }
  return (
    <div className='justify-content-center m-4'>
      <form className="row g-3 needs-validation"  onSubmit={loginSubmit}>
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip01"  className="form-label">First name</label>
    <input type="text" className="form-control" ref={nameRef} id="validationTooltip01" defaultValue={"Mark"} required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip02" className="form-label">Last name</label>
    <input type="text" className="form-control" ref={surnameRef} id="validationTooltip02" defaultValue={"Otto"} required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div className="col-md-4 position-relative">
    <label htmlFor="validationTooltipUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      <input type="email" className="form-control" ref={emailRef}id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div className="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div className="col-md-6 position-relative">
    <label htmlFor="validationTooltip03" className="form-label">ID</label>
    <input type="text" minLength={'13'} ref={idRef} className="form-control" id="validationTooltip03" required/>
    <div className="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip04" className="form-label">Course</label>
    <select className="form-select" id="validationTooltip04" ref={subjectRef} required>
      <option defaultValue={""}>Math</option>
      <option>Math and Science</option>
      <option>Science</option>
    </select>
    <div className="invalid-tooltip">
      Please select a valid subject.
    </div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTool" className="form-label">School name (if applicable)</label>
    <input type="text" className="form-control" ref={schoolRef} id="validationTool"/>
    <div className="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip059" className="form-label">Tel</label>
    <input type="tel" className="form-control" ref={telRef} id="validationTooltip059"/>
    <div className="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip050" className="form-label">Parent tel</label>
    <input type="tel" className="form-control" ref={parentTelRef} id="validationTooltip050"/>
    <div className="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <hr></hr>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationToolti" className="form-label">Create new password</label>
    <input type="password" className="form-control" onChange={detectPass} ref={passRef} id="validationToolti"/>
    <div className="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip057" className="form-label">Confirm password</label>
    <input type="password" className={verified?"form-control":"form-control border border-danger"} onChange={detectPass} ref={conpassRef} id="validationTooltip057"/>
    <div className="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <p className='text-secondary'>{errorMessage}</p>
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    </div>
    
  )
}

export default Register
