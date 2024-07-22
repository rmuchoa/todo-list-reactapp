import './TodoFormField.css'

const TodoFormField = ({ field, label, placeholder, value, setter }) => {
    return (
        <div className="form-control">
            <label htmlFor={ field }>{ label }</label>
            <input
                type="text"
                name={ field }
                placeholder={ placeholder }
                onChange={ (event) => setter(event.target.value) }
                value={ value || "" }
                required />
        </div>
    )
}

export default TodoFormField