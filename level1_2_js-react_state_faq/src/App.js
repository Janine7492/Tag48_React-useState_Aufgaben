
import { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);



  return (
    <div className="App">
      <section className='question'>
        <h1>Why is React great?</h1>
        <button type='button' onClick={() => setCount(count + 1)}>{count % 2 === 0 ? '+' : '-'}</button>
      </section>
      {count % 2 === 0 ? '' : <p>Fast Learning Curve</p>}
    </div>
  );
}

export default App;
