import {useState} from 'react'

function App() {
  const [count,changeCount] = useState(0)
  const addCount = ()=>{
    changeCount(count+1)
  }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={addCount}>Add count</button>
    </div>
  );
}

export default App;
