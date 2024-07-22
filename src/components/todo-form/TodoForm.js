import './TodoForm.css'

import { useState } from "react"
import TodoFormField from './todo-form-field/TodoFormField'

const TodoForm = ({ saveTodo }) => {

    const [ title, setTitle ] = useState("")
    const [ time, setTime ] = useState("")
    
    const handleSubmit = async (event) => {
      event.preventDefault()
      
      const todo = {
        id: Math.random().toString(),
        title,
        time,
        done: false
      }
  
      await fetch(process.env.JSON_SERVER_API_BASE_URL + "/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json"
        }
      })
  
      saveTodo(todo)
  
      setTitle("")
      setTime("")
    }

    return (
        <div className="form-todo">
            <h2>Insira a sua próxima tarefa:</h2>
            <form onSubmit={ handleSubmit }>
                <TodoFormField
                    field="title"
                    label="O que você vai fazer?"
                    placeholder="Título da tarefa"
                    value={ title }
                    setter={ setTitle } />

                <TodoFormField
                    field="time"
                    label="Duração:"
                    placeholder="Tempo estimado (em horas)"
                    value={ time }
                    setter={ setTime } />
                
                <input type="submit" value="Criar Tarefa" />
            </form>
        </div>
    )
}

export default TodoForm