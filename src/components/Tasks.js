// import React, { Component } from 'react'

// class Tasks extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     )
//   }
// }

// export default Tasks

import React from "react";

const Tasks = (props) => {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => props.removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
