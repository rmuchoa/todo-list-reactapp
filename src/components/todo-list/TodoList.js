import './TodoList.css'

import Todo from '../todo/Todo'

const TodoList = ({ todos, deleteTodo, updateTodo }) => {

    return (
        <div className="list-todo">
            <p>Lista de tarefas:</p>
            
            { todos.length === 0 && <p>Não há tarefas!</p> }
            
            {
                todos.map((todo) => (
                    <Todo
                        key={ todo.id }
                        todo={ todo }
                        deleteTodo={ deleteTodo }
                        updateTodo={ updateTodo } />
                )) 
            }
        </div>
    )
}

export default TodoList