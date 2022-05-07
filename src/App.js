import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import HandleProduct from './components/HandleProduct';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Cart number={number} />
      <HandleProduct setNumber={setNumber}/>
      
    </div>
  );
}

export default App;
