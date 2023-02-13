import { Outlet, Link } from "react-router-dom";

const Layout = ({screenWidth, loggedIn}) => {
  
  return (
    <>
      {
        loggedIn === "false"? null:
        screenWidth < 800?
        <nav className="navbar fixed-bottom navbar-light bg-light m-5 rounded-pill bg-primary border-bottom">
        <Link to="/" ><span className="material-icons btn btn-outline-info btn-lg rounded-5 ">
            home
          </span></Link>
        <Link to="/results"><span className="material-icons btn btn-outline-info btn-lg rounded-5">
          leaderboard
        </span></Link>
        <Link to="/tasks"><span className="material-icons btn btn-outline-info btn-lg rounded-5">
            engineering
          </span></Link>
          <Link to="/lessons"><span className="material-icons btn btn-outline-info btn-lg rounded-5">
            cast_for_education
          </span></Link>
          
    </nav>
    :
    <nav className="navbar sticky-top navbar-light bg-light m-3 rounded-pill bg-primary border-bottom">
        <Link to="/" className="text-decoration-none" ><span className="material-icons btn btn-outline-info btn-lg rounded-5 m-1">
            home
          </span>Home</Link>
        <Link to="/results" className="text-decoration-none"><span className="material-icons btn btn-outline-info btn-lg rounded-5 m-1">
          leaderboard
        </span>Grading</Link>
        <Link to="/tasks" className="text-decoration-none"><span className="material-icons btn btn-outline-info btn-lg rounded-5 m-1">
            engineering
          </span>Tasks</Link>
          <Link to="/lessons" className="text-decoration-none"><span className="material-icons btn btn-outline-info btn-lg rounded-5 m-1">
            cast_for_education
          </span>Lessons</Link>
          
    </nav>}
      
      <Outlet />
    </>
  )
};

export default Layout;