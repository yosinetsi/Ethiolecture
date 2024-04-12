// CourseList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import Header from '../department/Header';
import CourseHeader from './CourseHeader';




interface Course {
  id: number;
  courseCode: string;
  courseTittle: string;
  catagory:string;
 
  // ... other properties
}


const CourseList: React.FunctionComponent = () => {
  const [courses, setCourses] = useState<Course[]>([]);
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
  }, []); // The empty dependency array ensures that the effect runs only once on mount



  const reoadPage=()=>{
// reload the page
location.reload();
  };
// Delete course

const deleteCourse = async (id:number)=>{

 await axios.delete(`http://localhost:8084/api/delete/${id}`);
 
 reoadPage();
};
// update course




  
  return (
    <div>
      <CourseHeader/>
      <h2>Courses List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Catagory</th>
            <th>Action</th>
           
          </tr>
        </thead>
       
       
        <tbody>
          {courses.map(course => (
         
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.courseCode}</td>
              <td>{course.courseTittle}</td>
              <td>{course.catagory}</td>
              <td> <Link to={`/course-details/${course.courseCode}`} className="btn btn-info" >View</Link></td>
              <td> <Link to = {`/update-course/${course.courseCode}`} className="btn btn-success" >Update</Link></td>
               <td> <button className="btn btn-danger" onClick={()=>deleteCourse(course.id)}>Delete</button></td>
        
            </tr>
          ))}
        </tbody>
     
       
      </table>
    </div>
  );
};

export default CourseList;
