import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./layouts/Navbar"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Nav/>}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
