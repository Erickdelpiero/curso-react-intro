function TodoButton(){
    return(
        <button className="todo-button" onClick={()=>{
            console.log('Le diste click a crear un nuevo Todo');
        }
        }>
            Crea un nuevo Todo
        </button>
    );
    }

export {TodoButton}