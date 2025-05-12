import { useCallback, useState } from 'react';
import './App.css';
import Increment from './components/Increment/increment';
import Tabform from './components/Tab/tabform';
import Checkbox from './components/Checkbox/Checkbox';
import Circle from './components/Createcircle/circle';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null)
  const memoizedHandleIncrement = useCallback(() => {
    setCount(prev => prev +1)
  }, [setCount])
  
  return (
    <div className="App">
      <Increment addCounts = {memoizedHandleIncrement}/>
      {count}
      <Tabform />
      <Checkbox />
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      <div className='circle-container'> 
        {
        value && <Circle inputNumber={value} />
        }
      </div>
     
    </div>
  );
}

export default App;
