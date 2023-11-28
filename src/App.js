import { TodoCounter } from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { TodoButton } from './Componentes/TodoButton';

const DefaultTodos=[
  {texto: 'Hola, Todo1', completed: true},
  {texto: 'Hola, Todo2', completed: true},
  {texto: 'Hola, Todo3', completed: false},
  {texto: 'Hola, Todo4', completed: true},
  {texto: 'Hola, Todo5', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter   completed={3}   total={18}/>
      <TodoSearch />

      <TodoList>
        {DefaultTodos.map(Todo => (
          <TodoItem
          key={Todo.texto}
          tex={Todo.texto}
          completed={Todo.completed}/>
        ))}
      </TodoList>
      
      <TodoButton/>
    </>
  );
}

export default App;
