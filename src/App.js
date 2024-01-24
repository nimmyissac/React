import './App.css';
import renderApp from './index.js';
// import { useState } from 'react';

let stateValues = [];
let callIndex = -1;

const useState = (initialValue) => {
  callIndex++;
  let currCallIndex = Number(callIndex);
  if (stateValues[currCallIndex] === undefined) {
    stateValues[currCallIndex] = initialValue;
  }

  const setValue = (newValue) => {
    stateValues[currCallIndex] = newValue;
    callIndex = -1;
    renderApp();
  }

  console.log(stateValues);

  return [stateValues[currCallIndex], setValue];
}

function App() {

  const [countA, setCountA] = useState(2);
  const [countB, setCountB] = useState(-2);

  return (
    <div>
      <div>
        <h1>Count A: {countA}</h1>
        <button onClick={() => { setCountA(countA - 1) }}>Subtract</button>
        <button onClick={() => { setCountA(countA + 1) }}>Add</button>
      </div>
      <div>
        <h1>Count B: {countB}</h1>
        <button onClick={() => { setCountB(countB - 1) }}>Subtract</button>
        <button onClick={() => { setCountB(countB + 1) }}>Add</button>
      </div>
    </div>
  )
}



export default App;
