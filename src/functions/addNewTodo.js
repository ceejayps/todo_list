// export default createNewTodo = (e) => {
//     if (
//       newTodoRef.current.value === null ||
//       newTodoRef.current.value.match(/^ *$/) !== null
//     ) {
//       newTodoRef.current.value = "";
//       return;
//     }

//     const newTodo = {
//       id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
//       title: newTodoRef.current.value,
//       status: false,
//     };
//     newTodoRef.current.value = "";
//     setTodos([...todos, newTodo]);
//   };