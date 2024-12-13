import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Showcase from "./components/Showcase"
import Developer from "./components/Developer"
import About from "./components/About"
import logo from "./assets/Veran_logo2.png"
import NotFound from "./components/NotFound"
import Product from "./components/Product"
import TeamMembers from "./components/TeamMembers"
import KeyboardBuilder from "./components/KeyboardBuilder"
function App() {
  return (
    <>
    {/* Navigation nar */}
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo1" />
      </Link>
      <ul>
        <li><Link to={"/"}>Home</Link>  </li>
        <li><Link to={"/Products"}>Products</Link></li>
        <li><Link to={"/Showcase"}>Showcase</Link></li>
        <li><Link to={"/Reviews"}>Reviews</Link></li>
        <li><Link to={"/About"}>About Us</Link></li>
        <li><Link to={"/Developer"}>Developers</Link></li>
      </ul>
    </nav>
    <hr />



    {/* Routes of the application */}
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path="/keyboard-builder" element={<KeyboardBuilder />}></Route>
      <Route path = "/Products">
        <Route index element={<Products/>}></Route>
        <Route path=":keyboardId" element={<Product/>}></Route>
      </Route>
      <Route path = "/Showcase" element = {<Showcase/>}></Route>
      <Route path = "/Reviews" element = {<Reviews/>}></Route>
      <Route path="/About">
        <Route index element={<About />}></Route>
        <Route path=":memberId" element={<TeamMembers />}></Route>
      </Route>
      <Route path = "/Developer" element = {<Developer/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <hr />

    <footer>
      <p>&copy; Z&Z Corp. {new Date().getFullYear()}</p>
    </footer>
    </>

    


  )
}
export default App