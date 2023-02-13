import React, { useEffect } from 'react'
import ProfileCard from './ProfileCard'
import { useNavigate } from 'react-router-dom'

const Home = ({setLoggedIn}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    const inter = setInterval(()=>{
      if(localStorage.getItem("loggedIn") === 'false'){
        navigate("/login")
      }else{
        setLoggedIn("true")
        clearInterval(inter)
      }
    },3000)
  },[navigate,setLoggedIn])
  
  return (
    <div>
      <ProfileCard/>
      <div className='text-align-center'>
         
      </div>

      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Get started</button>

<div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Instructions</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body large">
  <h2>Hey there!!<span className="material-icons">
waving_hand
</span></h2>
        <p>Let us reminder you of the controls:</p>
        <p><span className="material-icons btn btn-outline-info btn-lg rounded-5 ">
            home
          </span> Loads this page</p>
        <p><span className="material-icons btn btn-outline-info btn-lg rounded-5">
          leaderboard
        </span> Track your performance</p>
        <p><span className="material-icons btn btn-outline-info btn-lg rounded-5">
            engineering
          </span> Get tasks from your admin</p>
          <p><span className="material-icons btn btn-outline-info btn-lg rounded-5">
            cast_for_education
          </span> Videos and lessons tab</p>
          <p>All they need is a simple touch <span className="material-icons">
touch_app
</span></p>
<br></br>
  </div>
</div>

    </div>
  )
}

export default Home
