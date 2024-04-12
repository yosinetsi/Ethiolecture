import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Fragment } from 'react';
interface Course{
  id: number;
  courseCode: string;
  courseTittle: string;
  catagory:string;

}
interface Department{
  id:number;
  depCode:string;
  depTitle:string;
  faculty:string;

}
function PostVideo(){
  // setData using local variable from froms fileds
  const   [videoCode,setvideoCode]=useState('');
  const   [depCode,setDepCode]=useState('');
  const   [courseCode,setCourseCode]=useState('');
  const   [postedOwner,setOwner]=useState('');
  const   [path,setPath]=useState('');
  
  const postData={
    videoCode:videoCode,
    depCode :depCode,
    courseCode: courseCode,
    postedOwner:postedOwner,
    path:path,
   
  };





  const handleSubmit = async () => {

    // Assuming you have an API endpoint to post data to
    const apiUrl = 'http://localhost:8084/api/post-video';

    alert(videoCode + depCode +courseCode +postedOwner +path);
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("data posted sucessfully");
        console.log('Data posted successfully!');
        clearFrom();
        // You can perform additional actions upon successful posting
      } else {
        alert('netwok error');
        console.error('Failed to post data');
      }
    } catch (error) {
      alert('netwok error'+' '+error);
      console.error('Error posting data:', error);
    }

    
  };


  const clearFrom=()=>{
  setvideoCode('');
  setDepCode('');
  setCourseCode('');
  setOwner('');
  setPath('');

  };

  const [courses, setCourses] = useState<Course[]>([]);
  const [department,setdep]=useState<Department[]>([]);
  //const {id}=useParams()
  useEffect(() => {
    // Simulated function to fetch courses from the database
    const getCourses = async () => {
      try {
        const response = await axios.get<Course[]>('http://localhost:8084/api/get-course-list'); // Replace with your actual API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Call the function to fetch courses when the component mounts
    getCourses();
  }, []); 


useEffect(()=>{
const getDep=async ()=>{
  try{
const response= await axios.get<Department[]>('http://localhost:8084/api/departmentlist');

    setdep(response.data)
  }catch(error){
    console.log("error is",error);
  }

};getDep();




},[])





        return (
            <Fragment>
        
               <div className="container mt-4">
          
              <h2>Add New Video</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="videoCode" className="form-label">video Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="videoCode"
                    name="videoCode"
                    value={videoCode}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setvideoCode(e.target.value)}
                    
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="courseCode" className="form-label">Course code</label>
                
                <select className="form-select" aria-label="Default select example" onChange={(e:ChangeEvent<HTMLSelectElement>)=>setCourseCode(e.target.value)} name="courseCode" id="courseCode" required>
              <option value="">Select</option>
                {courses.map(course=>(

<option value={course.courseCode} >{course.courseTittle}</option>


                ))}
             

                </select>
                </div>
        
          <div className='mb-3'>
        <label htmlFor="depCode"  className='form-label'> Department Code</label>
        <select className="form-select" aria-label="Default select example" onChange={(e:ChangeEvent<HTMLSelectElement>)=>setDepCode(e.target.value)} name="depCode" id="depCode" required>
          
          <option value="">Select</option>
          {
            department.map(dep=>(
              <option value={dep.depCode}>{dep.depTitle}</option>

            ))
          }
      
         </select>
          </div>

          <div className="mb-3">
                  <label htmlFor="videoOwner" className="form-label">video Owner</label>
                  <input
                    type="text"
                    className="form-control"
                    id="videoOwner"
                    name="videoOwner"
                    value={postedOwner}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setOwner(e.target.value)}
                    
                    required
                  />
                </div>


                <div className="mb-3">
                  <label htmlFor="path" className="form-label">Path</label>
                  <input
                    type="text"
                    className="form-control"
                    id="path"
                    name="path"
                    value={path}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setPath(e.target.value)}
                    
                    required
                  />
                </div>

               

             
                
                <button type="submit" className="btn btn-primary">Post video</button>
              </form>
            </div>
            </Fragment>
          );
   

};
export default PostVideo;