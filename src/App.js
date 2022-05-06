import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import HandleProduct from './components/HandleProduct';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <HandleProduct setNumber={setNumber}/>
      <Cart number={number} />
    </div>
  );
}

export default App;
