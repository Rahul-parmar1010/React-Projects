import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo !== "") {
      const newTodoItem = {
        id: new Date().getTime(),
        description: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToEdit.description);
    setEditTodo(id);
  };

  const handleUpdateTodo = () => {
    if (newTodo !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo ? { ...todo, description: newTodo } : todo
        )
      );
      setNewTodo("");
      setEditTodo(null);
    }
  };
    const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
 <>

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'><h1>todo</h1></a>
    <form className="d-flex" role="search">
      <input className="form-control" type="text" value={newTodo}
        onChange={handleInputChange} placeholder="Enter a new todo" aria-label="Search "/>
        {editTodo ? (
        <button type="button" className="btn btn-success mx-2" onClick={handleUpdateTodo}>Update</button>
      ) : (
       <button  onClick={handleAddTodo} type="button" className="btn btn-primary mx-2">Add </button>
      )}
    </form>
  </div>
      </nav>
      <div className="container2 my-5">

        <ul class="list-group mx-2">
         {todos.map((todo) => (
          <li className="list-group-item mx-4" key={todo.id}>
              {todo.description}
              
            <button className="Edit mx-1" onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button className="Delete  " onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
 ))}
        </ul>
      </div>
       </>
  );
};

export default TodoApp;

 
   
      