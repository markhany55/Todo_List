import React, { useState } from "react";
import { Fragment } from "react";
import './TodoList.scss'
const TodoList =()=>{
    const [data,setdata]=useState([
        {id:1,name:"Mark",age:25},
        {id:2,name:"Ahmed",age:26},
        {id:3,name:"Mohamed",age:27}
    ])
    // add items
    const [newdata,setnewdata]=useState({})
const Handlename =(e)=>{

setnewdata(() => ({ ...newdata, name: e.target.value}))
}
const Handleage =(e)=>{
    
    setnewdata(() => ({ ...newdata, age: e.target.value}))
}
const Handeladd =(e)=>{
    e.preventDefault()
    setdata(() => ([ ...data,newdata]))
    localStorage.setItem("key",[data.name])
}
// deleteitems
const HandelDelete =(name)=>{
    const finaldata=[...data]
    const Delete=data.findIndex((e)=>{return e.name===name})
    finaldata.splice(Delete,1)
    setdata(finaldata)
}
// local storage
return(
    <Fragment>
            <p>Todo List</p>
            <table>
            <tr>
    <td className="name">Name</td>
    <td className="age">Age</td>
    <td className="action">Action</td>
  </tr>
        {data.map((ele)=>{
        return(
            <tr key={Math.random()}>
<td>{ele.name}</td>
<td>{ele.age}</td>
<td className="delete" onClick={()=>{HandelDelete(ele.name)}}>&times;</td>
            </tr>
        )
    })}
            </table>
            <form onSubmit={Handeladd}>
                <input type="text" placeholder="Add Name" id="name" onChange={Handlename}/>
                <input type="number" placeholder="Add Age" id="age"onChange={Handleage}/>
                <input type="submit" value="Add"/>
            </form>
        </Fragment>
    )
}
export default TodoList