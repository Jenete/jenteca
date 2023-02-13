import React from 'react'
import {  Link } from "react-router-dom";
const LessonViewer = ({element}) => {
    return (
        <div>
          <h6>Task: {element.name}</h6>
          <div>
            <video controls className='w-100 h-75' src={element.href} width={{"width":"80%"}}></video>
          </div>
          <p>Download link: <a href={element.href}>Click here</a></p>
          <div>
            Extra notes: ....<br/><br/>
            Date uploaded: {element.dateModified}
          </div>
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link className="btn btn-primary" to="/lessons"> GO BACK</Link>
    </div>
        </div>
        
      )
}

export default LessonViewer
