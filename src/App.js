import './App.css'

import { useState, useEffect } from "react"
import TodoHeader from './components/todo-header/TodoHeader'
import TodoForm from './components/todo-form/TodoForm'
import TodoList from './components/todo-list/TodoList'

function App() {

  const [ todos, setTodos ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {

    const loadData = async() => {
      setLoading(true)

      const todos = await fetch(process.env.JSON_SERVER_API_BASE_URL + "/todos")
        .then((result) => result.json())
        .then((data) => data)
        .catch((error) => console.log(error))

      setLoading(false)
      setTodos(todos)
    }

    loadData()
  }, [])

  const saveTodo = async (todo) => {
    setTodos((previousState) => [...previousState, todo])
  }

  const deleteTodo = async (id) => {
    setTodos((previousState) => previousState.filter((todo) => todo.id !== id))
  }

  const updateTodo = async (updated) => {
    setTodos((previousState) => previousState.map((state) => (
      state.id === updated.id ? state = updated : state
    )))
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">

      <TodoHeader />

      <TodoForm
        saveTodo={ saveTodo } />
      
      <TodoList
        todos={ todos }
        deleteTodo={ deleteTodo }
        updateTodo={ updateTodo } />
      
    </div>
  );
}

export default App
