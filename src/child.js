import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = (props) => {
    let counter = useContext(CounterContext);
    console.log(counter);
    return (<dev>
        <h1>Hello child</h1>
        <h1>This is {props.name}</h1>
        <h2>Counter Value is {counter[0]}</h2>
        <button onClick={() => { counter[1](++counter[0]) }}>Increment</button>
    </dev>);
}

export default Child;