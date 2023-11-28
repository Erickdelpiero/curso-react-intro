function TodoItem(props) {
    return (
        <li className="todo-item">
            <div>V</div>
            <p>{props.tex}</p> {/* Aquí parece que hay un error tipográfico; debería ser props.text */}
            <div>X</div>
        </li>
    );
}

export { TodoItem };
