import React, { useState } from "react";
import { Fragment } from "react";
import { useFormik } from "formik";
import './TodoList.scss'
const TodoList =()=>{
    const [data,setdata]=useState([
        {id:1,name:"Mark",age:25},
        {id:2,name:"Ahmed",age:26},
        {id:3,name:"Mohamed",age:27}
    ])
    // add data

const formik=useFormik({
    initialValues:{
        name:'',
        age:''
    },
    onSubmit:values=>{
setdata([...data,{name:values.name,age:values.age}])        
    }
})
// deleteitems
const HandelDelete =(index)=>{
    const finaldata=[...data]
    const Delete=data.findIndex((e,id)=>{return id===index})
    finaldata.splice(Delete,1)
    setdata(finaldata)
}
return(
    <Fragment>
            <p>Todo List</p>
            <table>
            <tr>
    <td className="name">Name</td>
    <td className="age">Age</td>
    <td className="action">Action</td>
  </tr>
        {data.map((ele,id)=>{
        return(
            <tr key={id}>
<td>{ele.name}</td>
<td>{ele.age}</td>
<td className="delete" onClick={()=>{HandelDelete(id)}}>&times;</td>
            </tr>
        )
})}

         <tr>

             <td colSpan="3">
<form onSubmit={formik.handleSubmit}>

                    <input className="first" type="text" placeholder="Add Name" id="name" onChange={formik.handleChange}/>
                <input className="first" type="number" placeholder="Add Age" id="age"onChange={formik.handleChange}/>
                <button className="first" type="submit" >Add</button>
</form>
             </td>

         </tr>
            </table>
        </Fragment>
    )
}
export default TodoList