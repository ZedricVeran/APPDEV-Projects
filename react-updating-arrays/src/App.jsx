import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import FavoriteGames from './FavoriteGame'

function App() {

  return (
    <>
    <Header />
    <FavoriteGames />
    <Footer />
    </>
  )
}

export default App
