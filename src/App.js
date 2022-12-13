import "./App.css";
import {BiSend} from "react-icons/bi";

import React, { useState, useRef } from "react";
import Todo from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  let newTodoRef = useRef();

  const createNewTodo = (e) => {
    if (
      newTodoRef.current.value === null ||
      newTodoRef.current.value.match(/^ *$/) !== null
    ) {
      newTodoRef.current.value = "";
      return;
    }

    const newTodo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title: newTodoRef.current.value,
      status: false,
    };
    newTodoRef.current.value = "";
    setTodos([...todos, newTodo]);
  };

  const deleteTodos = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const preventSpaceAsFirstChar = (e) => {
    if (e.target.value.length === 0) {
      if (e.keyCode === 32) {
        e.preventDefault();
      }
    }
  };

  const updateTodo = (id) =>
    setTodos(
      todos.map((todo) => {
        todo.id === id
          ? (todo.status = !todo.status)
          : (todo.status =todo.status);
        return todo;
      })
    );

    
  return (
    <div className="App">
      <div className="appBody">
   
        <div className="listBody">
        <div className="inputBodySection">
          <h2> Create A New Todo</h2>

          <div
            className="inputSection"
            id="inputTitle"
            onChange={preventSpaceAsFirstChar}
          >
            <input type="text" placeholder="Create New Todo" ref={newTodoRef} />{" "}
            <BiSend
              className="sendIcon"
              defaultValue="Reset"
              onClick={createNewTodo}
            />
            </div>
          </div>
         
          <h2> Todos</h2>
          <hr className="horizontal" />
          <div className="todos">
            {todos.reverse().map((todo, key) => (
              <Todo key={key} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodos}/>
            ))}
          </div>
          </div>
          
        </div>
      </div>
   
  );
}

export default App;
