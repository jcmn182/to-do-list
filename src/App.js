import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import List from './components/List.jsx';
import Task from './components/Task.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
const {v4 : uuidv4} = require('uuid')

function App() {
const [name, setName] = useState("");
const [list, setList] = useState([]);
const [edit,setEdit] = useState(false)
const [editText, seteditText] = useState('');
const [idTask, setIdTask] = useState('')
const [arrayDelete, setarrayDelete] = useState([])


const handleSubmit = (e) => {
    e.preventDefault()
      
   if (!name){
     console.log('enter a task please')
   }
   else{
     const task = (work) => {
      const newId = uuidv4()
       let task = {
         id:newId,
         task:work,
         taskComplete:false   
       }
       return task
     }
      setList([...list,task(name)])
      setName("")
    }
  }

const HandleRemove = (id) => {
const taskDelete = list.find(element => element > id);
setarrayDelete([...arrayDelete,taskDelete])
const removeIde = list.filter((task)=>task.id !== id )
console.log(arrayDelete)
setList(removeIde)
}
const handleUpdate = (id) => {
  setEdit(true)
  setIdTask(id)
}

const handleEdit = (e) =>{
  e.preventDefault()
  let taskToEdit;
  list.map((task) => {
    if(task.id===idTask){
      
        taskToEdit = task.task=editText
      
    }
      return taskToEdit


  })

  seteditText('')
  setIdTask('')
  setEdit(false)
}
const clearList = () => {
  setList([])
  setIdTask('')
  seteditText('')
}

const completeTask = (id) =>{ 
  const tarea =list.map((task)=>(task.id===id?task.taskComplete=true:task))
   setList(tarea)
}
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h3 style={{marginBottom:"1.rem",textAlign:"center"}}>
          To do App
        </h3>
        <div className="mb-
        3 form">
          <input type="text" className="form-control m-1" placeholder="e.g. bread" onChange={(e)=>setName(e.target.value)}value={name}/>
          <button type="submit"  className="btn btn-success m-1">Add</button>
        </div>
      </form>
      <Router>
      {list.length > 0 &&(
        <div style={{marginTop: "2rem"}}>
          <div className="task-list">
          <NavLink className="border-bottom m-3" activeClassName="selected" to="/">Pending tasks</NavLink>
          <NavLink className="border-bottom m-3" activeClassName="selected" to="/CompleteTask">Tasks complete</NavLink>
          <NavLink className="border-bottom m-3" activeClassName="selected" to="/DeleteTask">Tasks deleted</NavLink>
        
          <Switch>
          <Route path="/" exact>
          <List items={list} remove={HandleRemove} update={handleUpdate} 
            seteditText={seteditText} edit={edit} id={idTask}  editText={editText} 
            handleEdit={handleEdit}  completeTask={completeTask}/>
          <div className="text-center">
            <button className="btn btn-warning" onClick={clearList}>
              Clear Items
            </button>
          </div>
          </Route>
          <Route path="/CompleteTask" exact>
            <Task/>
          </Route>
          <Route path="/DeleteTask" exact>
            <Task/>
          </Route>
        </Switch>
        </div>
        </div>
      )}
      </Router>
    </section>
  );
}

export default App;
