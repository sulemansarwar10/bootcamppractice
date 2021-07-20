import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {
    let [State, dispatch] = useReducer(CounterReducer, 3);
    console.log(State);
    return (
        <div>
            <h1>Value of Reducer is {State}</h1>
            <button onClick={() => { dispatch('INCREMENT') }}>Child2</button>
        </div>
    );
}
export default Child2;
