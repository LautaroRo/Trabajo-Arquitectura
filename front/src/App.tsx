import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import NavBar from "./components/navbar"

function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
