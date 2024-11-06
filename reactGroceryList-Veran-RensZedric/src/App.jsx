import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shop from './Shop';
import './index.css';



function App() {
  let items =
  [{id: 1, name: "🍇Grapes🍇", price: 50},
  {id: 2, name: "🍊Orange🍊", price: 20},
  {id: 3, name: "🥝Kiwis🥝", price: 40},
  {id: 4, name: "🍌Bananas🍌", price: 70},
  {id: 5, name: "🥒Cucumbers🥒", price: 90}]


  return (
    <>
    <Shop items={items}/>
    </>
  )
}

export default App
