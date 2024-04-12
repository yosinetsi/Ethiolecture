import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import {  useNavigate,useParams } from "react-router-dom";
import CourseHeader from "../course/CourseHeader";

   
function UpdateDep (){
   
const {depCode}=useParams();
const [id,setId]=useState('');
   const [depTitle,setTitle]=useState('');
  const [faculty,setFaculty]=useState('');

  useEffect(()=>{

 axios.get(`http://localhost:8084/api/depsingle/${depCode}`)
 .then(res=>{
     
     setTitle(res.data.depTitle);
    setFaculty(res.data.faculty);
     setId(res.data.id);
 }).catch(error=> console.log("error:",error))
  },[])

  const update=()=>{
    axios.put(`http://localhost:8084/api/depupdate/${depCode}`,{id,depCode,depTitle,faculty})
    .then(res=>{
        alert("updated!")
        location.href='http://localhost:5173/dep';
        console.log("sucessfully updated:"+res)
    }).catch(error=>console.error("fail",error));
    
  }
    return(
<div>
<CourseHeader/>
<label htmlFor="id">id:
<input type="text" name="" value={id} readOnly id="" /> 
</label><br />


<label htmlFor="depcode">depcode:

<input type="text" name="" value={depCode} readOnly id="" /> 
</label><br />
<label htmlFor="deptitle">deptitle:
<input type="text" name="" value={depTitle} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} id="" /> 
</label><br />
<label htmlFor="faculty">faculty:

<input type="text" value={faculty} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFaculty(e.target.value)}} /> 
</label><br />

<button onClick={update}>Update</button>

</div>

    );

};
export default UpdateDep;