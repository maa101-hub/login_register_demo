import react from 'react';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const Teacher=()=>
{
    const [questionText,SetquestionText]=useState();
    const [options,Setoptions]=useState([]);
    const [correctAnswer,SetcorrectAnswer]=useState();

    const handlesubmit=(e)=>
    {
        e.preventDefault();
        axios.post('http://localhost:3001/teachers',{questionText,options,correctAnswer});
        SetquestionText('');
        Setoptions([]);
        SetcorrectAnswer('');
        alert("Question Added Successfully");
    }
    return(
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Add Question</h2>
      <form onSubmit={handlesubmit}>  
        <div className="mb-3">
          <label htmlFor="questionText" className="form-label">Question Text:</label>
          <input type="text" name="questionText" className="form-control" id="questionText" placeholder="Enter question text" onChange={(e)=>(SetquestionText(e.target.value))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="options" className="form-label">Options (comma separated):</label>
          <input type="text" name="options" className="form-control" id="options" placeholder="Enter options" onChange={(e)=>(Setoptions(e.target.value.split(',')))}/>
        </div>
        <div className="mb-3">
          <label htmlFor="correctAnswer" className="form-label">Correct Answer:</label>
          <input type="text" name="correctAnswer" className="form-control" id="correctAnswer" placeholder="Enter correct answer" onChange={(e)=>(SetcorrectAnswer(e.target.value))}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Question</button>
      </form>
    </div>
  )
}
export default Teacher;