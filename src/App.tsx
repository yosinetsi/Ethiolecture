

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PostDepartment from "./department/PostDepartment";
import Department from "./department/Department";
import UpdateDep from "./department/UpdateDep";
import Header from "./department/Header"
import CourseList from "./course/CourseList";
import UpdateCourse from "./course/UpdateCourse";
import ViewSingleCourse from "./course/ViewSingleCourse";
import HomePage from "./header/HomePage";
import PostCourse from './course/PostCourse';
import PostVideo from './video/PostVideo';
import Video from './video/Video';
import Login from './Login/Login';

const App=()=>{

return (
  <div>
  <BrowserRouter>
 
  <Routes>
     
    <Route path="home" element={<HomePage/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path="course" element={<CourseList/>}/>
    <Route path="postcourse" element={<PostCourse/>}/>
    <Route path="postdep" element={<PostDepartment/>}/>
    <Route path="dep" element={<Department/>}/>
    <Route path='postvideo' element={<PostVideo/>}/>
    <Route path='video' element={<Video/>}/>
    
    <Route path="/update/:depCode" element={<UpdateDep/>}/>
    <Route path="/update-course/:courseCode" element={<UpdateCourse/>}/>
    <Route path="/course-details/:courseCode" element={<ViewSingleCourse/>}/>

    

  </Routes>
  </BrowserRouter>

  </div>

);
};
export default App;