import React, { Fragment } from "react";
import './bootstrap.min.css'
import './login.css'
import Header from "../department/Header";
function Login(){
  
  const openView=(e:string)=>{
  const  loginBox=document.getElementById("login-box");
  const  createBox=document.getElementById("create-box");
  const   home =document.getElementById('home') 
if(e==='signin'){
  
if(loginBox && createBox && home ){

  loginBox.style.display='block';
  createBox.style.display='none';
  home.style.display='none'
 closeHeader()
 }}
 
 else if(e==="home"){

  if(loginBox && createBox && home  ){
  loginBox.style.display='none';
  createBox.style.display='none';
  home.style.display='block'
 closeHeader();
  }

 } else if(e==='signup'){
  if(loginBox && createBox && home  ){
  loginBox.style.display='none';
  createBox.style.display='block';
  home.style.display='none'
  closeHeader();
  }
 }


}
 /*
 login method
 */
const login=()=>{
  const  err=document.getElementById('signin');
  if(err){
    err.style.color="red";
    err.innerHTML='wrong password';
    return err;
  }

}
// open header
const openHeader=()=>{
  const header=document.getElementById('header');
  const menu=document.getElementById('menu');
  if(header && menu){
    header.style.display='block';
    menu.style.display='none';
  }

}
//close hearde
const closeHeader=()=>{

  const header=document.getElementById('header');
  const menu=document.getElementById('menu');
  if(header && menu){
    header.style.display='none';
    menu.style.display='block';
  }

}



    return(

        <Fragment>
          <body className="login">
         {/* <!--div onClick={openHeader} className="menu" id="menu">
          <span>
            <i></i>
            <i></i>
            <i></i>
          
          </span>
      
          
          </div-->
         
          
        <div className="header" id="header">
      <span onClick={closeHeader}>X</span>
      <li>
<ul> <button onClick={()=>(openView('home'))}><i className="bx bx-home"></i>Home</button> </ul>
<ul> <button >Contact Us</button> </ul>
<ul> <button   onClick={()=>(openView('signup'))}>Registration</button> </ul>
<ul> <button   onClick={()=>(openView('signin'))}>Login</button> </ul>

      </li>

    </div>*/}
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<h1>Testing on gitHub</h1>





        <div className="home" id="home">

<h1>Welcome to Ethio Lecturel video Uploading and learning website</h1>
<p>Application-name = Name of the application
Traceid = each request and response traceid is same when calling same service or
one service to another service.

Spanid = Span Id is printed along with Trace Id. Span Id is different every request
and response calling one service to another service.

Zipkin-export = By default it is false. If it is true, logs will be exported to the Zipkin
server.
Now, add the Spring Cloud Starter Sleuth dependency in your build configuration file as
follows:
Maven users can add the following dependency in your pom.xml file: </p>
<div className="img">

<img src="" alt="" />

</div>

<p>Application-name = Name of the application
Traceid = each request and response traceid is same when calling same service or
one service to another service.

Spanid = Span Id is printed along with Trace Id. Span Id is different every request
and response calling one service to another service.

Zipkin-export = By default it is false. If it is true, logs will be exported to the Zipkin
server.
Now, add the Spring Cloud Starter Sleuth dependency in your build configuration file as
follows:
Maven users can add the following dependency in your pom.xml file: </p>



</div>











      <div className="login-box" id="login-box">
       
     <div className="title"> <button id="signin" onClick={()=>(openView('signin'))} className="active">Sign In</button> <button onClick={()=>(openView('signup'))}>Sign Up</button> </div>
        <form   onSubmit={login} method="post">
        <p><img src="src/Login/user.png" alt="non" /><input type="text" name="username" id="username" placeholder="Username" required /></p>
        <p><img src="src/Login/password.png" alt="" /><input type="password" name="password" id="password" placeholder="Password" required /></p>
         <button  type="submit"   >Login</button> <br />

      <a href=""><input type="checkbox" name="" id="" />Remember</a>  <br />  
      <a href="" >Forgot password</a>
</form>
      </div>

      <div className="create-box" id="create-box">

      <div className="title"> <button onClick={()=>(openView('signup'))} className="active">Sign Up</button> <button  onClick={()=>(openView('signin'))}>Sign In</button>  </div>
      <p>First Name<input type="text" name="fname" id="fname" placeholder="first name"  spellCheck/></p>
      <p>Email<input type="email" name="email" id="email" placeholder="E-mail" /></p>
        <p>Phone Number<input type="text" name="phone" id="phone" placeholder="Phone Number" /></p>
        <p>User Name<input type="text" name="username" id="username" placeholder="Username" /></p>
        <p>Password<input type="password" name="password" id="password" placeholder="Password"  /></p>
  
        
        <p>Code<input type="password" name="password" id="password" readOnly placeholder="Verification Code" /></p>
   <button>Register</button>


      </div>


 <div className="footer">
  
  <p>@Copy right reserved by YOSEPH GETACHEW 2024</p>
  
  </div>     

  </body>
        </Fragment>


    );


}
export default Login;