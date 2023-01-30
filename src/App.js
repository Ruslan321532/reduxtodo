import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { AddTodo } from './components/AddTodo';
import { TodoLists } from './components/TodoList';

const todostyle = {
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "400",
  lineHeight: "20px",
  color:"#D1B59A",
}

const App = () => {

  
  return (
    <div className="container1">
      <h2 style={todostyle}>TodoList</h2>
      <AddTodo/>
      <TodoLists/>
    </div>
  );
}

export default App;