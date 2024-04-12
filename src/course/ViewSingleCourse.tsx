import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Headr from "../department/Header";
import CourseHeader from "./CourseHeader";
function ViewSingleCourse(){
const {courseCode}=useParams();
const [id,setId]=useState('');
const [courseTittle,setTittle]=useState('');
const [catagory,setCatagory]=useState('');


useEffect (()=>{
    axios.get(`http://localhost:8084/api/course-by-coursecode/${courseCode}`)
    .then(res=>{
        setId(res.data.id);
        setTittle(res.data.courseTittle);
        setCatagory(res.data.catagory);
       console.log(res)

    })
    .catch(err=>console.log('error message is .....'+err));

},[]);
// reload page function 
const reloadPage=()=>{
location.reload();
};
// delete departemen of {deparetemen} using departement id 

const deleteCourse =async (courseCode:any)=>{
await axios.delete(`http://localhost:8084/api/course-by-coursecode/${courseCode}`)

reloadPage();
};

return(

    <div>
    <CourseHeader/>
      <h2>Course of {courseTittle}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>CreditHour</th>
            <th>Course Type</th>
           <th>Action</th>
           
          </tr>
        </thead>
       
       
        <tbody>
          
         
            <tr key={id}>
              <td>{id}</td>
              <td>{courseCode}</td>
              <td>{courseTittle}</td>
              <td>{catagory}</td>
              <td> <Link to = {`/update-course/${courseCode}`} className="btn btn-success" >Update</Link></td>
               <td> <button className="btn btn-danger" onClick={()=>deleteCourse(id)}>Delete</button></td>
        
            </tr>
      
        </tbody>
     
       
      </table>
    </div>


);





};
export default ViewSingleCourse;
