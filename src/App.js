import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [chosenAlgo, setChosenAlgo] = useState("");

  const handleChange = event => {
    setChosenAlgo(event.value);
  }

  return (
    <div className="App">
      <Header algo={chosenAlgo} onChange={handleChange}/>
      <Main algo={chosenAlgo}/>
    </div>
  );
}

export default App;
