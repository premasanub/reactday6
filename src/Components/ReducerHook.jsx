import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const ReducerHook = () => {
    const [val,dispatch] = useReducer(ReducerAction,0)
  
    return (
        <div>
            <h1>UseReducer Hook</h1>
            <button onClick={()=>{dispatch({type:"Add",payload:10})}}>Add</button>
            {val}
            <button onClick={()=>{dispatch({type:"Sub",payload:5})}}>Sub</button> 
        </div>
    );
};

export default ReducerHook;