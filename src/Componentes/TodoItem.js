import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <span 
            className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}>
                V
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.tex}
            </p>
            <button
            className="todo-buttonX" 
            onClick={props.onDelete}>
                X
            </button>
        </li>
    );
}

export { TodoItem };
