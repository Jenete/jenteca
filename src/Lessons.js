import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import { getLessons } from './services/FileManager';

const Lessons = ({ setLesson, lesson}) => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([])
  const [errorMessage, setErrorMessage] = useState("To save your data and avoid traffic we don't render lessons unless permitted. Click permit to get them.")
  useEffect(()=>{
  // //   setInterval(async ()=>{
    
  // //   var newList = await getLessons();
  // //   setLessons(newList);
  // //   newList = await getLessons();
  // //   if(lessons.length < newList.length){
  // //       console.log(lessons.length);
  // //       //clearInterval(intv);
  // //   }else{
  // //     console.log(lessons.length+" compare to server "+newList.length);
  // //     setLessons(newList);
  // //   }
  // // },9000);
  //window.open('./lessons');
  loadData();
  })
  function loadData(){
    
      //setErrorMessage("Loading.....try clicking after 3 seconds if nothing is happening");
      getLessons().then((items)=>{
        if (lessons.length >= items.length) return;
        setLessons(items);
        setErrorMessage("Done");
      })
      
  }
  
  
  function openLesson(element){
    setLesson(element);
    navigate("/lesson");
  }
  return (
    <div>
      <h3 className='position-absolute start-50 translate-middle'>Session videos</h3>
      <br></br>
      {lessons === null || lessons.length === 0? <p>{errorMessage}</p>:<table className="table table-hover m-1">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Lession</th>
            <th scope="col">Date uploaded</th>
          </tr>
          </thead>
          <tbody>
        {lessons.map((element)=>
          <tr key={element.id} className='w-25 h-50' onClick={() => openLesson(element)}>
            <th scope="row" className='w-25 h-25'><img className='w-25 h-25' src={'https://firebasestorage.googleapis.com/v0/b/lastoption-4ac5c.appspot.com/o/files%2Ficon.png?alt=media&token=579dae23-04d5-4afa-ba9f-66ec6fe1198d'} alt=''></img></th>
            <td>{element.name}</td>
            <td>{element.dateModified}</td>
          </tr> 
        )}

        </tbody>
    </table>}
    <button onClick={()=>{
      loadData();
    }}>Permit</button>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default Lessons
