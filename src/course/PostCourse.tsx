// src/components/PostForm.tsx

import React, { useState } from 'react';
import { Fragment } from 'react';
import CourseHeader from './CourseHeader';


const PostCourse = () => {
  const [postData, setPostData] = useState({
    courseCode: '',
    courseTittle: '',
    catagory: '',
   
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming you have an API endpoint to post data to
    const apiUrl = 'http://localhost:8084/api/course';
    
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

  return (
    <Fragment>
      <CourseHeader/>
       <div className="container mt-4">
  
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseCode" className="form-label">Course Code</label>
          <input
            type="text"
            className="form-control"
            id="courseCode"
            name="courseCode"
            value={postData.courseCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseTittle" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseTittle"
            name="courseTittle"
            value={postData.courseTittle}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-3">
          <label htmlFor="catagory" className="form-label">Catagory</label>
          <input
            type="text"
            className="form-control"
            id="catagory"
            name="catagory"
            value={postData.catagory}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Post Course</button>
      </form>
    </div>
    </Fragment>
  );
};

export default PostCourse;
