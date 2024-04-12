import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../department/Header";
import CourseHeader from "./CourseHeader";
function UpdateCourse(){
const {courseCode}=useParams()
const [id,setId]=useState('');
const [courseTittle,setTittle]=useState('');
const [catagory,setcatagory]=useState('');


useEffect(()=>{

    axios.get(`http://localhost:8084/api/course-by-coursecode/${courseCode}`)
    .then(res=>{
        setId(res.data.id);
        setTittle(res.data.courseTittle);
        setcatagory(res.data.catagory);
       console.log(res)

    })
    .catch(err=>console.log('error message is .....'+err))
},[]);


const handleUpdate = (e:any) => {
    e.preventDefault();
    // Simulating an update using Axios. Replace this with your actual update logic.
    axios.put('http://localhost:8084/api/update-course/'+courseCode, {id, courseCode,courseTittle,catagory })
      .then(response => {
        console.log('Data updated successfully:', response.data);
        alert("updated!");
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };




    return(
    
<div>
<CourseHeader/>
<form  onSubmit={handleUpdate}>
<label htmlFor="courseCode">Course Code</label>
<input type="text"  value={courseCode}   name="code"/> <br />
<label htmlFor="courseCode">ID</label>
<input type="text"  value={id} onChange={e=>setId(e.target.value)}  name="code" id="courseCode" /> <br />
<label htmlFor="courseTittle">Course Tittle</label>             
<input type="text" value={courseTittle} onChange={e=>setTittle(e.target.value)} name="tittle" id="courseTittl" /> <br />
<label htmlFor="catagory">Catagory</label>
<input type="text" value={catagory} onChange={e=>setcatagory(e.target.value)} name="credit" id="catagory" /><br />
<button type="submit">UpdateCourse</button>


</form>


</div>



    );
};
export default UpdateCourse;