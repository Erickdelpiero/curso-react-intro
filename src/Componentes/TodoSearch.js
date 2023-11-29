import React from "react";

function TodoSearch({searchValue,setSearchValue}){
    

    return(
    <input 
        className="todo-search" 
        placeholder="Buscar..."
        value={searchValue}
        onChange={(event)=>{
            //console.log(event.target.value);
            setSearchValue(event.target.value);
        }}
    />
    );
    }

export {TodoSearch}