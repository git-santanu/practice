import { useCallback, useState } from 'react';
import './App.css';
import Increment from './components/Increment/increment';
import Tabform from './components/Tab/tabform';
import Checkbox from './components/Checkbox/Checkbox';

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
      <Checkbox />
    </div>
  );
}

export default App;
