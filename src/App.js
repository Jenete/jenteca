import './App.css';
import {  BrowserRouter, Routes, Route } from "react-router-dom";
// import BottomNav from './BottomNav';
import Home from './Home';
import NavBarMenu from './NavBar';
import Results from './Results';
import Settings from './Settings';
import Tasks from './Tasks';
import Layout from './Layout'
import Lessons from './Lessons';
import PageError from './PageError';
import TaskDetails from './TaskDetails';
import LessonViewer from './LessonViewer';
import { useState } from 'react';
import AddLesson from './AddLesson';
import AddTask from './AddTask';
import UploadResults from './UploadResults';
import SignIn from './forms/SignIn';
import { HandleScreen } from './forms/HandleScreen';

function App() {
  const results = [{mark:"76",date: "17/03/2023",task:"Math Test 1"},{mark:"50",date: "17/03/2023",task:"Physics Test 2"},{mark:"30",date: "17/03/2023",task:"Science Assessment 2"},{mark:"90",date: "17/03/2023",task:"Tech Math Test 2"}]
  const lessons = [{id:"1",thumbnail:"https://media.istockphoto.com/id/636332456/photo/online-education-concept.jpg?s=612x612&w=is&k=20&c=gP5r2wr3JaeOu524wHYPxsrlp4wBEt9ON2Nz9_dQnok=",date: "17/03/2023",task:"Math Test 1"},
  {id:"2",thumbnail:"https://media.istockphoto.com/id/636332456/photo/online-education-concept.jpg?s=612x612&w=is&k=20&c=gP5r2wr3JaeOu524wHYPxsrlp4wBEt9ON2Nz9_dQnok=",date: "17/03/2023",task:"Physics Test 2"},
  {id:"3",thumbnail:"https://media.istockphoto.com/id/636332456/photo/online-education-concept.jpg?s=612x612&w=is&k=20&c=gP5r2wr3JaeOu524wHYPxsrlp4wBEt9ON2Nz9_dQnok=",date: "17/03/2023",task:"Science Assessment 2"},
  {id:"4",thumbnail:"https://media.istockphoto.com/id/636332456/photo/online-education-concept.jpg?s=612x612&w=is&k=20&c=gP5r2wr3JaeOu524wHYPxsrlp4wBEt9ON2Nz9_dQnok=",date: "17/03/2023",task:"Tech Math Test 2"}]
  const tasks = [{id:"1",dueDate:"4",date: "17/03/2023",task:"Math Test 1"},{id:"2",dueDate:"5",date: "17/03/2023",task:"Physics Test 2"},{id:"3",dueDate:"3",date: "17/03/2023",task:"Science Assessment 2"},{id:"4",dueDate:"9",date: "17/03/2023",task:"Tech Math Test 2"}]
  const [task, setTask] = useState({});
  const [lesson, setLesson] = useState({});
  
  // const [result, setResult] = useState({});
  const [screenWidth, setScreenWidth] = useState(400)
  var screenSize = HandleScreen();
  const handleResize = ()=>{
    screenSize = HandleScreen();
    setScreenWidth(screenSize.width);
    //console.log(screenSize);
  }
  setTimeout(handleResize,3000);
  window.addEventListener("resize", handleResize);
  if(localStorage.getItem("loggedIn") !== "true")
  localStorage.setItem("loggedIn","false");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  return (

      <BrowserRouter>
      {loggedIn === "false"? null:<NavBarMenu setLoggedIn={setLoggedIn}/>}
      <main>
      <Routes>
        <Route path="/" element={<Layout screenWidth={screenWidth} loggedIn={loggedIn} />}>
          <Route index element={<Home setLoggedIn={setLoggedIn}/>} />
          <Route path="/results" element={<Results results={results} />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} setTask={setTask}/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/lessons" element={<Lessons lessons={lessons} setLesson={setLesson} lesson={lesson}/>} />
          <Route path="/task" element={<TaskDetails element={task}/>} />
          <Route path="/lesson" element={<LessonViewer element={lesson}/>} />
          <Route path="/login" element={<SignIn setLoggedIn={setLoggedIn}/>} />
          <Route path="/addLesson" element={<AddLesson/>} />
          <Route path="/addTask" element={<AddTask/>} />
          <Route path="/uploadResults" element={<UploadResults/>} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
      </main>
      {/* <BottomNav/> */}
      </BrowserRouter>
      
    
  );
}

export default App;
