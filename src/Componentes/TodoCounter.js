import { FcApproval } from "react-icons/fc";


function TodoCounter(props){
    if(props.total!==0){
        return(
            <h1 className="todo-counter">
                Completaste {props.completed} de los {props.total} Todo's totales
            </h1>
            );
    }
    else{
        return(
            <h1 className="todo-counter">
                <FcApproval />
                Felicitaciones!!!<br />
                Has culminado todos tus pendientes
            </h1>
            );
    }
    }

export {TodoCounter}