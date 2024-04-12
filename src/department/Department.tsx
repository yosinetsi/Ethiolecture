import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from "./Header";
interface DepartmentList{
id:number,
depCode:string,
depTitle:string,
faculty:string,
};
function Department() {
    const [department, setDep] = useState<DepartmentList[]>([]);

    useEffect(() => {
        const getDepartment = async () => {

            try {
                const response = await axios.get<DepartmentList[]>('http://localhost:8084/api/departmentlist');
            
            if(response.status){
                setDep(response.data);
                console.log("data loaded sucessfully")
            }
            else{
                console.log("failed")
            }
            
            
            } catch (error) {
                console.log("error :", error);
            }




        };


getDepartment();




    }, []);


    const loadPage=()=>{
        location.reload();
    }
    


    const deleteDepartment=async (id:number)=>{

   const response=await axios.delete(`http://localhost:8084/api/dep/${id}`);
   loadPage()

    }

    return(
<div>
    <Header/>
<table className="table">
    <thead >
        <tr>
    <th>id</th>
    <th>Code</th>
 <th>title</th>
 <th>faculty</th>
 <th>action</th>
 </tr>
    </thead>


<tbody>

{ department.map(dep=>(

<tr key={dep.id}>

<td>{dep.id}</td>
<td>{dep.depCode}</td>
<td>{dep.depTitle} </td>
<td>{dep.faculty}</td>

<td><button className="btn btn-danger" onClick={()=>deleteDepartment(dep.id)}>Delete</button></td>
<td> <Link className="btn btn-success" to={`/update/${dep.depCode}`} >Update</Link></td>



</tr>


))

}


</tbody>



</table>




</div>



    );




}
export default Department;
