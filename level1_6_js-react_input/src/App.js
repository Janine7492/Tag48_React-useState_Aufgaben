
import { useState } from 'react';
import './App.css';

function App() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  function resetButton() {
    setFirstname('');
    setLastname('');
    setEmail('');
  }

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Vorname" onChange={event => setFirstname(event.target.value)}></input>
        <input type="text" placeholder="Nachname" onChange={event => setLastname(event.target.value)}></input>
        <input type="email" placeholder="E-Mail-Adresse" onChange={event => setEmail(event.target.value)}></input>
        <input type="reset" onClick={resetButton}></input>
      </form>

      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>E-Mail: {email}</p>
    </div>
  );
}

export default App;
