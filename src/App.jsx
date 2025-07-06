import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PortFolio from "./pages/PortFolio"
import About from "./pages/About"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/portfolio" element = {<PortFolio/>}/>
          <Route path="/contact" element = {<Contacts/>}/>
        </Routes>
    </main>
  )
}

export default App