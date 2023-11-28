function TodoSearch(props){
    return(
    <input 
        className="todo-search" 
        placeholder="Buscar..."
        onChange={(event)=>{
            console.log(event.target.value);
        }
        }
    />
    );
    }

export {TodoSearch}