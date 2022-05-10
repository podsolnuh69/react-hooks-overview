import {useState} from 'react';
import './App.css';

function composeInitialState() {
  console.log("Asdasd")
   return 0
}

function App() {
  const [counter, setCounter] = useState(() => composeInitialState());
  const [state, setState] = useState({
    title: 'Счётчик',
    date: Date.now()
  })

  return (
    <div className="App">
      <h1>Счётчик: {counter}</h1>
      <a className="app-button-add btn-floating btn-large waves-effect waves-light green">
        <i className="material-icons"
          onClick={(e) => setCounter(counter + 1)}>
            +
        </i>
      </a>
      <a className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons"
            onClick={(e) => setCounter(counter - 1)}>
              -
        </i>
      </a>
      <a
        onClick={() => {
            setState({
              ...state,
              title: "новое название"
            })
          }
        } 
        class="waves-effect waves-light btn">
          Изменить текст
      </a>
      <pre>
        {JSON.stringify(state)}
      </pre>
    </div>
  );
}

export default App;
