import logo from './logo.svg';
import './App.css';

import React from 'react';
import Counter from './Counter';
import { useSelector } from 'react-redux';


function App() {

  const count = useSelector(state=>state.counter.count);
  return (
    <div className="App">
      <h1>Test redux</h1>
      <h2>The Global Count: {count}</h2>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;