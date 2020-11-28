import React from 'react';
import Child from './child';
const Parent = (props) => {
    return (<dev>
        <h1>Hello Parent</h1>
       <Child name={props.name}/>
    </dev>
    );
}

export default Parent;