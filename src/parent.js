import React from 'react';
import Child from './child';
import Child2 from './child2';


const Parent = (props) => {
    return (<dev>
        <h1>Hello Parent</h1>
        <Child name={props.name} />
        <Child2 />
    </dev>
    );
}

export default Parent;