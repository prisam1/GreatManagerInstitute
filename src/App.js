import Home from "../src/Pages/Home" 
import { Routes, Route} from "react-router-dom";
import Login from "../src/Pages/Login"
import Register from "../src/Pages/Register"
import  Header  from "../src/component/Header";
import './App.css';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     {/* <Routes>      
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    </Routes>   */}
     </>
  )
}

export default App;
