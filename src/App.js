
import './App.css';
import { useState } from 'react';
import Todo from './Todo';

function App() {
  var [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count+1);
  }
  return (
    <div className="App">
      <button onClick={incrementCounter}>Press the button {count} times</button>
      <Todo />
    </div>
  );
}

export default App;
