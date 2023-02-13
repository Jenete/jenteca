import React, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";
import { getTasks } from './services/FileManager';
const Tasks = ({ tasks, setTask}) => {
  const [tasks2, setTasks2] = useState([]);
  
  const [errorMessage, setErrorMessage] = useState("To save your data and avoid traffic we don't render tasks2 unless permitted. Click permit to get them.")
  useEffect(()=>{
  // //   setInterval(async ()=>{
    
  // //   var newList = await gettasks2();
  // //   setTasks2(newList);
  // //   newList = await gettasks2();
  // //   if(tasks2.length < newList.length){
  // //       console.log(tasks2.length);
  // //       //clearInterval(intv);
  // //   }else{
  // //     console.log(tasks2.length+" compare to server "+newList.length);
  // //     setTasks2(newList);
  // //   }
  // // },9000);
  loadData();
  },[])
  
  function loadData(){
      getTasks().then((items)=>{
        if (tasks2.length >= items.length) return;
        setTasks2(items);
        setErrorMessage("Done");
      })
      
  }
  
  
  return (
    <div>
      <h3 className='position-absolute start-50 translate-middle'>Tasks</h3>
      <br></br>
      {tasks2 === null || tasks2.length === 0? <h6>{errorMessage}</h6>:<table className="table table-hover m-1">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Assessment</th>
            <th scope="col">Date modified</th>
            <th scope="col">Due</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
        {
        tasks2.map((element)=>
          <tr key={element.id} onClick={()=>{setTask(element)}}>
            <th scope="row">{tasks2.indexOf(element)}</th>
            <td>{element.name}</td>
            <td>{element.dateModified}</td>
            <td>{3} day(s)</td>
            <td><Link to="/task">Open</Link></td>
          </tr> 
        )}
        </tbody>
    </table>}
    <button onClick={()=>{
      setErrorMessage("Loading.....try clicking after 3 seconds if nothing is happening");
      loadData();
    }}>Permit</button>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default Tasks
