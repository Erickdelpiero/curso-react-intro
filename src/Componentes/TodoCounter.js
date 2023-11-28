import './TodoCounter.css';

function TodoCounter(props){
    return(
    <h1>
        Completaste {props.completed} de los {props.total} Todo's totales
    </h1>
    );
    }

export {TodoCounter}