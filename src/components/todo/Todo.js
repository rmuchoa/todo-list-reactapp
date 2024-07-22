import './Todo.css'

import TodoActionEdit from './todo-actions/TodoActionEdit'
import TodoActionDelete from './todo-actions/TodoActionDelete'

const Todo = ({ todo, deleteTodo, updateTodo }) => {
    return (
        <div className="todo">
            <h3 className={ todo.done ? "todo-done" : "" }>{ todo.title }</h3>
            <p>Duração: { todo.time }</p>
            <div className="actions">
                <TodoActionEdit
                    todo={ todo }
                    updateTodo={ updateTodo } />
                <TodoActionDelete
                    todo={ todo }
                    deleteTodo={ deleteTodo } />
            </div>
        </div>
    )
}

export default Todo