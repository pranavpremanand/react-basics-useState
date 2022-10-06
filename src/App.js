import {useState} from 'react'
import Counter from './Counter';

function App() {
  const [count,changeCount] = useState(0)
  const addCount = ()=>{
    changeCount(count+1)
  }
  return (
    <div>
      <button onClick={addCount}>Add count</button>
      <Counter count={count}/>
    </div>
  );
}

export default App;
