import React from "react";

export default function Counter() {
    const [count,setCount]= React.useState(0);
     
    const onIncrease = () => {
        console.log("Increase click");
        setCount(count +1);
     }

     const onReset = () => {
        console.log("Reset click");
        setCount(0);
     }

     const onDecrease = () => {
        console.log("Decrease click");
        setCount(count -1);
        
     }
    
    return(
        <div>
            <h1>Counter</h1>
            <div>{count}</div>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}