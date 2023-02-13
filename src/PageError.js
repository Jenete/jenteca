import React from 'react'
import {  Link } from "react-router-dom";

const PageError = () => {
  return (
    <div>
      <Link to="/"><span className="material-icons btn btn-outline-secondary btn-lg">
            error
          </span>  <h1>Page 404 an error occured click me to go back</h1></Link>
    </div>
  )
}

export default PageError
