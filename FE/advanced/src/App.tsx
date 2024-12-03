import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>Current Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}

export default App;
