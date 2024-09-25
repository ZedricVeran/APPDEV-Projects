import React, {useState} from 'react'
export default function Counter() {
    //useState Hook for updating variable of STATEFUL VARIABLES
    const [count,setCount]  = useState(0)
    //to increment count
    //usinf arrow function
    const incrementCount = () =>{
        //previous state => new state
        //setCount(count => count + 1)
        //Shortcut for the above code setCount
        setCount(c => c + 1)
    }
    //to decrement count
    const decrementCount = () =>{
        setCount(c => c - 1)
    }
    //to reset the count
    const resetCount = () =>{
        setCount(c => c =0)
    }
    //nbsp means no break space
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count} 
            </p>
            &nbsp;
            <button className="butoon-container-increment" onClick={decrementCount}>Decrement</button>
            <button className="butoon-container-reset" onClick={resetCount}>Reset</button>
            <button className="butoon-container-decrement" onClick={incrementCount}>Increment</button>
        </div>
    )
}