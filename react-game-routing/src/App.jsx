import { Link,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Games from "./components/Games"
import NotFound from "./components/NotFound"
import Game from "./components/Game"
function App() {
  return (
    <>
      <h1 className="header">Z&Z Reviews</h1>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li >
          <li><Link to={"/about"}>About</Link></li >
          <li><Link to={"/games"}>Games</Link></li >

        </ul>
      </nav>

      {/*This  for the routes for the application*/}
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/games">
          <Route index element = {<Games/>}/>
          <Route path =":gameId" element={<Game/>}/>
        </Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
