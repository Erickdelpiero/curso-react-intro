import { TodoCounter } from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { TodoButton } from './Componentes/TodoButton';
import { Logo } from './Componentes/Logo';
import React from 'react';
import './index.css';

const DefaultTodos=[
  {texto: 'Todo1: Despertar temprano', completed: true},
  {texto: 'Todo2: Despertar tarde', completed: false},
  {texto: 'Todo3: Comer feliz', completed: true},
  {texto: 'Todo4: Comer triste', completed: false},
  {texto: 'Todo5: Bailar', completed: true},
]

function App() {
  const [searchValue, setSearchValue]= React.useState('');
  console.log("Los usuarios buscan Todo's de "+searchValue);

  const [todoValue]= React.useState(DefaultTodos);

  //Estado derivado
  const completedTodos=todoValue.filter(todo=>!!todo.completed).length;
  const searchedTodos= DefaultTodos.filter(todo=>{
    return todo.texto.toLowerCase().includes(searchValue.toLowerCase())});
  
  return (
    <>
      <TodoCounter   
        completed={completedTodos}   
        total={todoValue.length}/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(Todo => (
          <TodoItem
          key={Todo.texto}
          tex={Todo.texto}
          completed={Todo.completed}/>
        ))}
      </TodoList>
      
      <TodoButton/>
      <Logo/>
    </>
  );
}

export default App;