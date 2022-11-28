
import { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <section className='buttonSection'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count = 0)}>Reset</button>
      </section>
    </div>
  );
}

export default App;
