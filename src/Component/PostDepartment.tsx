import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import Header from '../department/Header';
function PostDepartment(){
    // usestate for assignments of data from input text field to variable
   const [depCode,setCode]=useState('');
   const [depTitle,setTitle]=useState('');
   const [faculty,setFaculty]=useState('');


   /// maping posted data using kes and values
 const data={
    // key:value
    depCode:depCode,
    depTitle:depTitle,
    faculty:faculty,

 } 
 
 const redirect=()=>{
  location.href='http://localhost:5173/dep';   
 }

 const handelsubmit=async ()=>{
    // end points of url
const url='http://localhost:8084/api/department';
try{
    const response= await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('POST successful:', response.json);
       clear();
       redirect();
      
    } catch (error) {
      console.error('Error during POST request:', error);
      alert("error :"+error);
    }
  };


   
 
function clear(){
    setCode('');
    setTitle('');
    setFaculty('');
}
return(

<div>
<Header/>
<form onSubmit={handelsubmit}>
<label htmlFor="depcode">depcode:

<input type="text" name="" value={depCode} onChange={(e:ChangeEvent<HTMLInputElement>)=>setCode(e.target.value)} required id="" /> 
</label><br />
<label htmlFor="deptitle">deptitle:
<input type="text" name="" value={depTitle} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} required id="" /> 
</label><br />
<label htmlFor="faculty">faculty:

<input type="text" value={faculty} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFaculty(e.target.value)}} required /> 
</label><br />

<button type='submit'>submit</button>
</form>
</div>

);

};

export default PostDepartment;