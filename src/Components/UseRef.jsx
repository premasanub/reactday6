import React from 'react';
import { useRef,useState,useEffect } from 'react';

const UseRef = () => {
    const inputRef = useRef();
    const val = useRef(0);

     const [data,setData] = useState("");

    useEffect (()=>{
        inputRef.current.focus()
    },[])

    const handleChange = (e) =>{
        console.log("handle change");
        setData(e.target.value)
        val.current += 1;
        console.log(val.current);
        //console.log("iref", iRef.current.value)   
     }


    return (
        <div>
            <h1>UseRef Hook</h1>
            <h1>UseRef Hook</h1>
            <input type="text" placeholder='Enter Your Name' ref={inputRef}/>
            <input type="email" placeholder='Enter Your Email' onChange={handleChange} />
            {val.current}

            {/* <input type="text" ref={inputRef} />
            <button onClick={() => { inputRef.current.focus(); }}>Focus Input</button>

            <button onClick={() => { alert(`Input Value: ${inputRef.current.value}`); }}>Show Input Value</button> */}
        </div>
    );
};

export default UseRef;