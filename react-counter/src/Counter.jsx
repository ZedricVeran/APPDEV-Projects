import React, {useState} from 'react';
export default function Counter(){
const [count, setCount] = useState(0)

//to increment
const incrementCount = () => {

//previous state  => new state
    setCount(c => c + 1)
}

const decrementCount = () =>{
    setCount(c => c -1)
}

const resetCount= () =>{
    setCount(c => c =0)
}

const decrementFiveCount = () =>{
    setCount(c => c - 5)
}

const incrementFiveCount = () =>{
    setCount(c => c + 5)
}

const randomCount = () =>{
    setCount(getRandomNumber())
}


const getRandomNumber = () => {
    const randomN = Math.floor(Math.random() * 100);
    return count >= 0.5? -randomN : randomN
}
return(
    <div className="container">
        <p className="counter-container">
            Counter: <br />{count}
        </p>
        &nbsp;
            
            <button className="button-container-increment" onClick={decrementCount}>Decrement</button>
            <button className="button-container-increment" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
           <button className="button-container-increment" onClick={decrementFiveCount}>Decrement 5</button>
           <button className="button-container-increment" onClick={randomCount}>Random</button>
            <button className="button-container-increment" onClick={incrementFiveCount}>Increment 5</button>



    </div>
)


}