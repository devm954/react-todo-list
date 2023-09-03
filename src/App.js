import { useState } from "react";
import "./App.css"
import Topbar from "./components/topbar/Topbar"

function App() {
const [task, setTask] = useState("")
const [discription, setDiscription] = useState("")
const [storage , setStorage] = useState([]);


const handelSubmit = (e) => {
  e.preventDefault();
  setStorage([...storage, {task,discription}])
  setTask("");
  setDiscription("");
}

const handelDelete = (index) =>{
  let copy = [...storage];
  copy.splice(index,1)
  setStorage(copy);
}

var rendertask = <h3 className="notask">No Task Available Right Now</h3>

if (storage.length > 0) {
  rendertask = storage.map((ltask, Index )=>{
      console.log(ltask)
      return(
        <div className="showtask" key={Index}>
          <div className="taskindex">
            <h3>{Index + 1}</h3>
            <div className="line"></div>
            <h4>{ltask.task}</h4>
          </div>
          <h5>{ltask.discription}</h5>
          <button onClick={(e)=> handelDelete(Index)}>DELETE</button>
        </div>
      )
  })
}

  return (
    <div className="App">
      <Topbar/>
      <div id="main">
        <form onSubmit={handelSubmit}>
          <input 
              type="text"
              name="tasks" 
              className="task"
              placeholder="Enter Your Task" 
              value={task} 
              onChange={(e)=>setTask(e.target.value)}
              />
          <textarea 
              name="discription" 
              id="descrip" 
              placeholder="Enter Task Discription"
              value={discription} 
              onChange={(e)=>setDiscription(e.target.value)} 
              cols="30" 
              rows="10"></textarea>
          <button id="todo" type="submit">Add Task</button>
        </form>
        <div className="container">
          <div className="taskheader">
            <div className="taskindex">
              <h3>No.</h3>
              <div className="line2"></div>
              <h4>Tasks</h4>
            </div>
            <h4>Discription</h4>
            <h4>Delete Task</h4>
          </div>
          <div className="rendertask">
            {rendertask}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;