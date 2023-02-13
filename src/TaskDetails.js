import React from 'react'
import {  Link } from "react-router-dom";

const TaskDetails = ({element}) => {
  return (
    <div>
      <h6>Task: {element.name}</h6>
      <iframe title={element.name} className='w-100 h-75' src={element.href}></iframe>
      <p>The task is due in 3 day(s)</p>
      <p>Download link: <a href={element.href}>Click here</a></p>
      <div>
        Extra notes: ....<br/><br/>
        Date uploaded: {element.dateModified}
      </div>
      <br></br>
      <hr></hr>
      <div>
        <h5>Upload</h5>
        <br></br>
        <input type={'file'}/>
        <button className="btn btn-secondary">Submit</button>
      </div>
      <br></br>
        <br></br>
        <br></br>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
       
      <Link className="btn btn-primary" to="/tasks"> GO BACK</Link>
      </div>
    </div>
    
  )
}



export default TaskDetails
