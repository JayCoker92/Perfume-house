import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./layouts/Navbar"
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Nav/>}>
            <Route path="/" element={<Home />}></Route>
          </Route>

<Route path="/auth/Sign-in" element={<Signin/>}/>
<Route path="/auth/Sign-up" element={<Signup/>}/>
  
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
