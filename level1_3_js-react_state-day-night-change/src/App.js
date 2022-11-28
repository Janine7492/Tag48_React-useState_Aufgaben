
import { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  return (
    <div className="App" >
      <section className={count % 2 === 0 ? 'dayTime' : 'nightTime'}>
        {count % 2 === 0 ? <p>Es ist Tag! ☀️</p> : <p>Es ist Nacht! 🌔</p>}
        <button type='button' onClick={() => setCount(count + 1)}>{count % 2 === 0 ? 'Wechsel zu Nacht' : 'Wechsel zu Tag'}</button>
      </section>
    </div>
  );
}

export default App;
