import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
return(
<div>

<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
<a href="http://localhost:5173/home">Home</a>
<a href="http://localhost:5173/dep">Departement</a>
<a href="http://localhost:5173/postdep">postDepratemnt</a>
</div>
</nav>

</div>



);


};
export default Header;