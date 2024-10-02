import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'

function App() {
  //array of fruits =>
  const fruits = [
    {id: 1, name: "apple", color: "red"}, //apple object
    {id: 2, name: "banana", color: "yellow"}, //banana object
    {id: 3, name: "orange", color: "orange"},//orange object
    {id: 4, name: "grape", color: "purple"},// grape object
    {id: 5, name: "kiwi", color: "green"},//kiwi object
  ]
  //desert objects
  const desserts= [
    {id:1, name: "cake", color: "red"},
    {id:2, name: "ice cream", color: "blue"},
    {id:1, name: "pie", color: "green"},
  ]

  return (
    <>
    <Header></Header>
    {/* {fruits.length > 0 &&  (<ListOfFruits items = {fruits} category = "My favorite Fruits"/>) : (<p> No Fruits</p>)} */}
    {fruits.length > 0 ?  (<ListOfFruits items = {fruits} category = "My favorite Fruits"/>) : (<p> No Fruits</p>)}
    {desserts.length > 0 ?  (<ListOfFruits items = {desserts} category = "My favorite desserts"/>) : (<p> I do not like desserts</p>)}
    <Footer></Footer>
    </>
  )
}

export default App
