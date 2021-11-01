import React, { useState } from 'react';
/*router*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
/*components*/
import PendingTask from './components/PendingTask.jsx';
import TaskComplete from './components/TaskComplete.jsx'
import TaskDelete from './components/TaskDelete.jsx'
/*styles*/
import 'bootstrap/dist/css/bootstrap.min.css'
/*libraries*/
const {v4 : uuidv4} = require('uuid')

function App() {
/*states*/
const [name, setName] = useState("");
const [list, setList] = useState([]);
const [edit,setEdit] = useState(false)
const [editText, seteditText] = useState('');
const [idTask, setIdTask] = useState('')
const [arrayDelete, setarrayDelete] = useState([])
const [arrayComplete, setarrayComplete] = useState([])
/*functions*/
const handleSubmit = (e) => {
    e.preventDefault() 
   if (!name){
     /*we show a alert if the input are empty*/
     console.log('enter a task please')
   }
   else{
      /*we do a object for each new task*/
    const task = (work) => {
    const newId = uuidv4()
       let task = {
         id:newId,
         task:work,
         taskComplete:false   
       }
       return task
     }
      /*we put the task in the task array state*/
      setList([...list,task(name)])
      /*we clean the input to wait for the new task*/
      setName("")
    }
}
const HandleRemove = (id) => {
/*we search a task by its id*/
const taskDelete = arrayComplete.find(element => element.id === id);
setarrayDelete([...arrayDelete,taskDelete])

/*we remove a task by id*/
const removeIde = arrayComplete.filter((task)=>task.id !== id )
console.log(removeIde)
setarrayComplete(removeIde)
}
const handleUpdate = (id) => {
  setEdit(true)
  setIdTask(id)
}
const handleEdit = (e) =>{
  e.preventDefault()
  /*we search a task by id  and we edit it */
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
  /*we restart the states*/
  setList([])
  setIdTask('')
  seteditText('')
  setarrayDelete([])
  setarrayComplete([])
}
const completeTask = (id) =>{ 
  const taskComplete = list.find(element => element.id === id);
  setarrayComplete([...arrayComplete,taskComplete])
  /*we remove a task by id*/
  const removeIde = list.filter((task)=>task.id !== id )
  setList(removeIde)
};

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h3 style={{marginBottom:"1.rem",textAlign:"center"}}>
          To do list
        </h3>
        <div className="mb-3 form">
          <input type="text" className="form-control m-1" placeholder="e.g. Feed pets" onChange={(e)=>setName(e.target.value)}value={name} required/>
          <button type="submit"  className="btn btn-success m-1">Add</button>
        </div>
      </form>
      <Router>
        <div className="task-list d-flex justify-content-center">
              <NavLink className="pd" exact to="/" activeClassName="selected" >Pending tasks</NavLink>
              <NavLink className="pd" exact to="/CompleteTask" activeClassName="selected" >Tasks complete</NavLink>
              <NavLink className="pd" exact to="/DeleteTask" activeClassName="selected" >Tasks deleted</NavLink>
            </div>
        {
          <div style={{marginTop: "2rem"}}>
            <Switch>
              <Route exact path="/" >
                <PendingTask items={list} remove={HandleRemove} update={handleUpdate} 
                  seteditText={seteditText} edit={edit} id={idTask}  editText={editText} 
                  handleEdit={handleEdit}  completeTask={completeTask}/>
              </Route>
              <Route  exact path="/CompleteTask">
                <TaskComplete arrayCompletItems={arrayComplete} remove={HandleRemove}/>
              </Route>
              <Route exact path="/DeleteTask" >
                <TaskDelete arrayDeletItems={arrayDelete} clearStates={clearList}/>
              </Route>
            </Switch>
          </div>
        }
      </Router>
    </section>
  );
}

export default App;
