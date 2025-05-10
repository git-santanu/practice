import { useCallback, useState } from 'react';
import './App.css';
import Increment from './components/increment';
import Tabform from './components/Tab/tabform';

function App() {
  const [count, setCount] = useState(0);
  const memoizedHandleIncrement = useCallback(() => {
    setCount(prev => prev +1)
  }, [setCount])
  
  return (
    <div className="App">
      <Increment addCounts = {memoizedHandleIncrement}/>
      {count}
      <Tabform />
    </div>
  );
}

export default App;
