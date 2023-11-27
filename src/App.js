import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem></TodoItem>
      <TodoCount 
          completed={3}
          total={18}
          />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return (
    <li>
      <div>V</div>
      <p>Tarea a realizar</p>
      <div>X</div>
    </li>
  );
}

function TodoCount(props){
  return(
    <h1>
      Completaste {props.completed} de los {props.total} Todo's totales
    </h1>
  );
}

export default App;
