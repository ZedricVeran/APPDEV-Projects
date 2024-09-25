//use state - hook; getting function in the react library
//importing usestate from React library
//this is like a class
import React, {useState} from 'react';
const randomColor = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
export default function ColorPicker(){
    //function component - useState = Hook
    //stateles component transformed to function component
    //mutator= updating value; we put the 'set' keyword
    const [color, setColor] = useState('#FFFFFF')
    //function to get the a randomnumber based on the index of randomColor
    function getRandomNumber() {
        return Math.floor(Math.random()*randomColor.length)

    }
    //get a random color from our array randomColor
    function getRandomColor(){
        let hex = "#"
        for(let i =0; i< 6; i++){
            hex += randomColor[getRandomNumber()]

        }
        return hex
    }
    //updating our state => color
    function randomColorChange(){
        setColor(getRandomColor())
    }
    //event handiling color chages for color input
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <>
        <div className="color-picker-container">
            <h1>Color PIcker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value= {color} onChange={handleColorChange}/>
            <button className="randomize" onClick = {randomColorChange}>Randomize</button>
        </div>
        </>
    )

}