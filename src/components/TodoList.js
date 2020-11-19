// import React, { Component } from 'react'
// import Tasks from './Tasks'
// import Input from './Input'

// class Todolist extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: []
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <Input />
//         <Tasks tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// export default Todolist

import React, { useState } from "react";
import Tasks from "./Tasks";
import Input from "./Input";

const Todolist = () => {
  const [tasks, manageTasks] = useState([
    "Wow Much Do",
    "Much Do Wow",
    "Walk the doge",
    "Pet the doge",
  ]);
  const [task, setTask] = useState("");

  const addTask = () => {
    let myNewList = [...tasks, task];
    manageTasks(myNewList);
    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const removeTask = (index) => {
    const taskArr = [...tasks];
    taskArr.splice(index, 1);
    console.log(tasks);
    manageTasks(taskArr);
  };

  console.log(tasks);

  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask} value={task} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Todolist;
