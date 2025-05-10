import { useCallback, useState } from 'react';
import './App.css';
import Increment from './components/increment';

function App() {
  const [activeTab, setActiveTab] = useState()
  const [count, setCount] = useState(0);
  const memoizedHandleIncrement = useCallback(() => {
    setCount(prev => prev +1)
  }, [setCount])
  
  return (
    <div className="App">
      <Increment addCounts = {memoizedHandleIncrement}/>
      {count}
    </div>
  );
}

export default App;
