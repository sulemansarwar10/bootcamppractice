import React, { useState } from 'react';
import Parent from './parent';
import CounterContext from './CounterContext';
import Reducer from './CounterReducer';

function App() {
  let count = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <div>
        <Parent name='suleman' />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
