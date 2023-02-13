import React from 'react'
const NavBar = ({setLoggedIn}) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark sticky-top mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://jenete.github.io/shtutoring/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TJFlfgIgYTGVWvrYfFvb2P2lRC4vKgxtEA&usqp=CAU" width="30" height="30" alt=""/>
            enTeca site
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./settings">Settings</a>
                </li>
                <li className="nav-item" onClick={()=>{
                 localStorage.setItem("loggedIn","false")
                 setLoggedIn("false");
                }}>
                  <a className="nav-link" href="./login">Log out</a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
