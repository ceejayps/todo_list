import React from 'react'
import {

    BiCheckbox,
    BiCheckboxChecked,
    BiTrash,
    BiSend
  } from "react-icons/bi";

const Todo = ({todo, updateTodo, deleteTodo, key}) => {
  return (
    <div key={key} className="todo">
                {todo.status === true ? (
                  <BiCheckboxChecked
                    onClick={() => updateTodo(todo.id)}
                    className="todoCheckedBox"
                  />
                ) : (
                  <BiCheckbox
                    onClick={() => updateTodo(todo.id)}
                    className="todoCheckBox"
                  />
                )}

                <p>{todo.title}</p>
                <BiTrash
                  className="todoDeleteIcon"
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
  )
}

export default Todo