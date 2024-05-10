import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"
import NavBar from "./components/navbar"

function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
