import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navigation from './Navigation'
import About from './About'
import Home from './Home'
function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Routes>
    <Route path="/about/" element={ <About/>}/>
     <Route path="/home/" element={ <Home/>}/>
     
   </Routes>
      <header>
        <h1>Todo List: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
      </Router>
    </div>
  );
}

export default App;
