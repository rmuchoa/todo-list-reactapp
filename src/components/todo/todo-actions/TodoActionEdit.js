import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"

const TodoActionEdit = ({ todo, updateTodo }) => {

    const handleEdit = async (todo) => {
        
        todo.done = !todo.done

        const updated = await fetch(process.env.JSON_SERVER_API_BASE_URL + "/todos/" + todo.id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        })

        updateTodo(updated)
    }

    return (
        <span onClick={ () => handleEdit(todo) }>
            { !todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill /> }
        </span>
    )
}

export default TodoActionEdit