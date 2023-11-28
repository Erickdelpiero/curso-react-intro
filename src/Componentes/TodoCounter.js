function TodoCounter(props){
    return(
    <h1 className="todo-counter">
        Completaste {props.completed} de los {props.total} Todo's totales
    </h1>
    );
    }

export {TodoCounter}