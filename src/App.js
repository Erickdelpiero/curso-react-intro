import { TodoCounter } from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { TodoButton } from './Componentes/TodoButton';
import { Logo } from './Componentes/Logo';
import React from 'react';
import './index.css';

const DefaultTodos=[
  {texto: 'Hola, Todo1', completed: true},
  {texto: 'Hola, Todo2', completed: false},
  {texto: 'Hola, Todo3', completed: true},
  {texto: 'Hola, Todo4', completed: true},
  {texto: 'Hola, Todo4', completed: false},
]

function App() {
  const [searchValue, setSearchValue]= React.useState('');
  console.log("Los usuarios buscan Todo's de "+searchValue);

  const [todoValue, todoSetValue]= React.useState(DefaultTodos);
  
  return (
    <>
      <TodoCounter   
        completed={todoValue.filter(todo=>!!todo.completed).length}   
        total={todoValue.length}/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

      <TodoList>
        {DefaultTodos.map(Todo => (
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