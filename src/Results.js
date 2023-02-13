import React from 'react'

const Results = ({results}) => {
  function calculateAvg(){
    var avg = 0;
    if (results.length === 0) return;

    results.forEach(element =>{
        try{
          avg += parseInt(element.mark);
        }catch(e){
          console.log(e);
        }
    })
    return parseInt(parseInt(avg)/results.length);
  }
  return (
    <div>
      <h3 className='position-absolute start-50 translate-middle'>Performance</h3>
      <br></br>
      {results === null || results.length === 0? <h3>Not available as yet</h3>:<table className="table table-hover m-1">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Assessment</th>
      <th scope="col">Mark</th>
      <th scope="col">Date modified</th>
    </tr>
    </thead>
    <tbody>
   {results.map((element)=>
    <tr key={element.task}>
      <th scope="row">{results.indexOf(element)}</th>
      <td>{element.task}</td>
      <td>{element.mark}</td>
      <td>{element.date}</td>
    </tr> 
   )}
  </tbody>
</table>}
    <h4>Average Performance: {calculateAvg()}%</h4>
    </div>
  )
}

export default Results
