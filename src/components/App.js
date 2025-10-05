import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, SetTodo] = useState([]);

  function handleClick() {
    SetTodo([...todo, input]);
    setInput('');
  }

  function handleDelete(id) {
    SetTodo(todo.filter((t,ind) => ind!==id))
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {todo.map((t,index) => {
          return (
            <div key={index}>
              {t} <button onClick={()=>handleDelete(index)} style={{marginleft:"100px"}}>Delete</button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
