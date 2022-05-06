import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import HandleProduct from './components/HandleProduct';

function App() {
  const [number, setNumber] = useState([]);

  return (
    <div className="App">
      <HandleProduct setNumber={setNumber}/>
      <Cart number={number} />
    </div>
  );
}

export default App;
