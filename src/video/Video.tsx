import axios from 'axios';
import React, { ChangeEvent } from 'react';
import { useState,useEffect } from 'react';
import './bootstrap.min.css'
import './video.css'
interface Video{
    id:number;
    videoCode:string;
    depCode:string;
    courseCode:string;
    postedOwner:string;
    path:string;

}
interface Count{
  id:number;

}
function Video(){
    const [comment,setComment]=useState('');
    const [videos,setVideo]=useState<Video[]>([]);
    const [searchItem ,setSearch]=useState('');
    const [controls,setControls]=useState(true);
    const [src,setSrc]=useState('src/video/a.vdmpvf');
    const [count,setCount]=useState<Count[]>([]);
    const video=['src/video/a.vdmpvf','src/video/b.vdmpvf','src/video/c.vdmpvf','src/video/d.vdmpvf','src/video/e.vdmpvf','src/video/f.vdmpvf'];
    const commnt=['hi this',',,,,,','my love good job']; 
    const setControl=()=>{
      setControls(!controls);
      setSrc('src/video/a.mp4');
    }
    useEffect(()=>{
    const getVideo=async ()=>{

        try{
    const response=await axios.get<Video[]>("http://localhost:8084/api/all-video");
         setVideo(response.data);

        }catch(error){
            console.log("error",error);
        }

    };

  getVideo();
    },[]);
    let counter=0;
    const slideOpen=()=>{
    
    const open=document.getElementById('header');
    const humberger=document.getElementById('humberger');
    if(open && humberger)
{
  open.style.display='block';
  humberger.style.display='none';
}  

}
const slideClose=()=>{
    
  const open=document.getElementById('header');
  const humberger=document.getElementById('humberger');
  if(open && humberger)
{
open.style.display='none';
humberger.style.display='block';
}  

}
  let check=1;
const changeColor=()=>{
  

    if(check===1){
      const cl=document.querySelector('body');
     if(cl){
      check--;
      return cl.style.backgroundColor='green';

     }
    
      }
  else if(check===0){
      const cl=document.querySelector('body');
     if(cl){
      check++;
      return cl.style.backgroundColor='rgba(4, 1, 7, 0.418)';
     }
     

    }}
  


    
   
    const search=()=>{
   alert(searchItem);

    }
    
    const getText=()=>{
return comment

    }

    return(
        <>
       
      <div> <span onClick={slideOpen} className='openspan'id='humberger' >...</span> </div>
       
      <header id='header'>
      <span onClick={slideClose} id='humberger' >X</span> <br />
     <button onClick={changeColor}>Dark-Mode</button>
      <li className='list'>
        <ul><a href="http://">Home</a></ul>
        <ul><a href="http://">LikeVideo</a></ul>
        <ul><a href="http://localhost:5173/video">FreeCourse</a></ul>
        <ul><a href="http://">FeeCourse</a></ul>
        <ul><a href="http://localhost:5173/home">Close</a></ul>
      </li>

      </header>

        <div>


        </div>
        <div className='search'>
            <form onSubmit={search}>
          <input type="search" className='search' value={searchItem} onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} placeholder='Search'  name="search" id="search" />
          <button type="submit">Search</button>
          </form>
        </div>
    <div className='container'>

<video src={src} width={800}height={300} autoPlay controls={controls} id='playvideo' ></video>
  

    </div>
<div className='maincontrol'>
    <button className='btn btn-success'  >like</button>
    <button>dislike</button>
    <button>save</button>
    <button>playlist</button>
    <button>View-Comment</button>
</div>




{
  video.map(vid=>(

 
    <li className='card'>
   
  <ul>

<div><video src={vid} onClick={()=>(setSrc(vid))}  width={375}height={275}></video></div>
  </ul>
  
 


 

    
    </li>
    
     ))
};

</>

    );


};
export default Video;