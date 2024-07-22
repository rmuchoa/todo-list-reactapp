import { BsTrash } from "react-icons/bs"

const TodoActionDelete = ({ todo, deleteTodo }) => {

    const handleDelete = async (id) => {
        await fetch(process.env.JSON_SERVER_API_BASE_URL + "/todos/" + id, {
            method: "DELETE"
        })

        deleteTodo(id)
    }

    return (
        <BsTrash onClick={ () => handleDelete(todo.id) } />
    )
}

export default TodoActionDelete